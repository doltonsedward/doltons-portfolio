"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Calendar, Users, ExternalLink, ChevronDown } from "lucide-react";
import TalkCard from "./TalkCard";
import { Talk } from "./TalkCard";
import { TalksService } from "../../lib/talks-service";

const ITEMS_PER_PAGE_DESKTOP = 6;
const ITEMS_PER_PAGE_MOBILE = 3;

export default function TalksSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [allTalks, setAllTalks] = useState<Talk[]>([]);
  const [stats, setStats] = useState({
    totalTalks: 0,
    upcomingCount: 0,
    pastCount: 0,
    ongoingCount: 0,
    totalAttendees: 0
  });
  const [displayTalks, setDisplayTalks] = useState<Talk[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        const [talksData, statsData] = await Promise.all([
          TalksService.getAllTalks(),
          TalksService.getTalksStats()
        ]);
        setAllTalks(talksData);
        setStats(statsData);
      } catch (error) {
        console.error('Failed to load talks data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Update display talks when tab or page changes
  useEffect(() => {
    const loadDisplayTalks = async () => {
      if (allTalks.length === 0) return;

      const status = activeTab === "all" ? undefined : activeTab as Talk['status'];
      const result = await TalksService.getPaginatedTalks(currentPage, ITEMS_PER_PAGE_DESKTOP, status);
      
      if (currentPage === 1) {
        setDisplayTalks(result.talks);
      } else {
        // Append new talks for "show more" functionality
        setDisplayTalks(prev => [...prev, ...result.talks]);
      }
      
      setHasMore(result.hasMore);
    };

    loadDisplayTalks();
  }, [activeTab, currentPage, allTalks]);

  const handleShowMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    setCurrentPage(1);
    setDisplayTalks([]); // Clear display talks while loading
  };

  const getTabCount = (status: string) => {
    switch (status) {
      case "upcoming":
        return stats.upcomingCount;
      case "past":
        return stats.pastCount;
      case "ongoing":
        return stats.ongoingCount;
      default:
        return stats.totalTalks;
    }
  };

  if (loading) {
    return (
      <section id="talks" className="px-6 py-16 lg:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="talks" className="px-6 py-16 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Mic className="h-8 w-8 text-gray-900 dark:text-gray-100 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Talks & Teaching</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge through webinars, workshops, and mentoring sessions. 
            Join upcoming events or explore recordings from past talks covering 
            modern web development, career guidance, and technical best practices.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-2">
              <Mic className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalTalks}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Total Talks</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalAttendees}+</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">People Reached</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.upcomingCount}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Upcoming Events</p>
          </div>
        </div>

        {/* Call to Action for Upcoming Events */}
        {stats.upcomingCount > 0 && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Join My Upcoming Sessions</h3>
                <p className="text-blue-100">
                  Don't miss out on the latest talks and mentoring opportunities. 
                  Register now to secure your spot!
                </p>
              </div>
              <Button 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => handleTabChange("upcoming")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                View Upcoming
              </Button>
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              All
              <Badge variant="secondary" className="ml-1">
                {getTabCount("all")}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              Upcoming
              <Badge variant="secondary" className="ml-1">
                {getTabCount("upcoming")}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="ongoing" className="flex items-center gap-2">
              Ongoing
              <Badge variant="secondary" className="ml-1">
                {getTabCount("ongoing")}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center gap-2">
              Past
              <Badge variant="secondary" className="ml-1">
                {getTabCount("past")}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTalks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <Button onClick={handleShowMore} variant="outline" size="lg">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Talks
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="mt-8">
            {stats.upcomingCount > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayTalks.map((talk) => (
                    <TalkCard key={talk.id} talk={talk} />
                  ))}
                </div>
                {hasMore && (
                  <div className="text-center mt-8">
                    <Button onClick={handleShowMore} variant="outline" size="lg">
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show More Talks
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No Upcoming Events</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check back soon for new talks and mentoring sessions!
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="ongoing" className="mt-8">
            {stats.ongoingCount > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayTalks.map((talk) => (
                    <TalkCard key={talk.id} talk={talk} />
                  ))}
                </div>
                {hasMore && (
                  <div className="text-center mt-8">
                    <Button onClick={handleShowMore} variant="outline" size="lg">
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show More Talks
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No Ongoing Sessions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular mentoring sessions will be listed here when active.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTalks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <Button onClick={handleShowMore} variant="outline" size="lg">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Talks
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Contact for Speaking Opportunities */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Interested in Having Me Speak?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to share knowledge and connect with the developer community. 
              Whether it's a conference, webinar, workshop, or mentoring session, I'd love to hear from you.
            </p>
            <Button asChild>
              <a href="#contact" className="inline-flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}