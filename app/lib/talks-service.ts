import { Talk } from "../components/TalksSection/TalkCard";
import { talksData } from "../components/TalksSection/data";

// This service layer abstracts data access and can be easily switched to API calls later
export class TalksService {
  // In the future, this could be replaced with API endpoints
  private static readonly BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

  /**
   * Get all talks
   * Future: GET /api/talks
   */
  static async getAllTalks(): Promise<Talk[]> {
    // Simulate API delay in development
    if (process.env.NODE_ENV === 'development') {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Future implementation:
    // const response = await fetch(`${this.BASE_URL}/api/talks`);
    // return response.json();
    
    return talksData;
  }

  /**
   * Get talks by status
   * Future: GET /api/talks?status={status}
   */
  static async getTalksByStatus(status: Talk['status']): Promise<Talk[]> {
    const allTalks = await this.getAllTalks();
    return allTalks.filter(talk => talk.status === status);
  }

  /**
   * Get talk by ID
   * Future: GET /api/talks/{id}
   */
  static async getTalkById(id: string): Promise<Talk | null> {
    const allTalks = await this.getAllTalks();
    return allTalks.find(talk => talk.id === id) || null;
  }

  /**
   * Get paginated talks
   * Future: GET /api/talks?page={page}&limit={limit}&status={status}
   */
  static async getPaginatedTalks(
    page: number = 1, 
    limit: number = 6, 
    status?: Talk['status']
  ): Promise<{
    talks: Talk[];
    totalCount: number;
    hasMore: boolean;
    currentPage: number;
    totalPages: number;
  }> {
    let talks = await this.getAllTalks();
    
    if (status) {
      talks = talks.filter(talk => talk.status === status);
    }

    const totalCount = talks.length;
    const totalPages = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTalks = talks.slice(startIndex, endIndex);

    return {
      talks: paginatedTalks,
      totalCount,
      hasMore: endIndex < totalCount,
      currentPage: page,
      totalPages
    };
  }

  /**
   * Get talks statistics
   * Future: GET /api/talks/stats
   */
  static async getTalksStats(): Promise<{
    totalTalks: number;
    upcomingCount: number;
    pastCount: number;
    ongoingCount: number;
    totalAttendees: number;
  }> {
    const allTalks = await this.getAllTalks();
    
    const upcomingCount = allTalks.filter(talk => talk.status === 'upcoming').length;
    const pastCount = allTalks.filter(talk => talk.status === 'past').length;
    const ongoingCount = allTalks.filter(talk => talk.status === 'ongoing').length;
    const totalAttendees = allTalks
      .filter(talk => talk.status === 'past')
      .reduce((sum, talk) => sum + (talk.attendees || 0), 0);

    return {
      totalTalks: allTalks.length,
      upcomingCount,
      pastCount,
      ongoingCount,
      totalAttendees
    };
  }

  /**
   * Search talks by title or description
   * Future: GET /api/talks/search?q={query}
   */
  static async searchTalks(query: string): Promise<Talk[]> {
    const allTalks = await this.getAllTalks();
    const lowercaseQuery = query.toLowerCase();
    
    return allTalks.filter(talk => 
      talk.title.toLowerCase().includes(lowercaseQuery) ||
      talk.description.toLowerCase().includes(lowercaseQuery) ||
      talk.shortDesc.toLowerCase().includes(lowercaseQuery) ||
      talk.topics.some(topic => topic.toLowerCase().includes(lowercaseQuery))
    );
  }

  /**
   * Get talks by topic
   * Future: GET /api/talks?topic={topic}
   */
  static async getTalksByTopic(topic: string): Promise<Talk[]> {
    const allTalks = await this.getAllTalks();
    return allTalks.filter(talk => 
      talk.topics.some(t => t.toLowerCase() === topic.toLowerCase())
    );
  }

  /**
   * Get related talks (by similar topics)
   * Future: GET /api/talks/{id}/related
   */
  static async getRelatedTalks(talkId: string, limit: number = 3): Promise<Talk[]> {
    const currentTalk = await this.getTalkById(talkId);
    if (!currentTalk) return [];

    const allTalks = await this.getAllTalks();
    const otherTalks = allTalks.filter(talk => talk.id !== talkId);

    // Score talks by topic similarity
    const scoredTalks = otherTalks.map(talk => {
      const commonTopics = talk.topics.filter(topic => 
        currentTalk.topics.includes(topic)
      ).length;
      return { talk, score: commonTopics };
    });

    // Sort by score and return top results
    return scoredTalks
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.talk);
  }
}

// Hook-like functions for easier migration to React Query or SWR later
export const useTalks = () => {
  // Future: This could use React Query, SWR, or similar
  // const { data, error, isLoading } = useQuery('talks', TalksService.getAllTalks);
  
  return {
    getAllTalks: TalksService.getAllTalks,
    getTalkById: TalksService.getTalkById,
    getTalksByStatus: TalksService.getTalksByStatus,
    getPaginatedTalks: TalksService.getPaginatedTalks,
    getTalksStats: TalksService.getTalksStats,
    searchTalks: TalksService.searchTalks,
    getTalksByTopic: TalksService.getTalksByTopic,
    getRelatedTalks: TalksService.getRelatedTalks,
  };
};