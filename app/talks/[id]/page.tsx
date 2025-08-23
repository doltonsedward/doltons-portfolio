"use client";

import { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { TalksService } from "../../lib/talks-service";
import { Talk } from "../../components/TalksSection/TalkCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Video,
  ExternalLink,
  Mail,
  MessageCircle,
  Star,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TalkDetailPage() {
  const params = useParams<{ id: string }>();
  const [talk, setTalk] = useState<Talk | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTalk = async () => {
      try {
        const talkData = await TalksService.getTalkById(params.id);
        setTalk(talkData);
      } catch (error) {
        console.error("Failed to load talk:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTalk();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!talk) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "webinar":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "workshop":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "mentoring":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "conference":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
      case "ongoing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "past":
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#talks" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Talks
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={getTypeColor(talk.type)} variant="secondary">
              {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
            </Badge>
            <Badge className={getStatusColor(talk.status)} variant="secondary">
              {talk.status.charAt(0).toUpperCase() + talk.status.slice(1)}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {talk.title}
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {talk.shortDesc}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Banner Image */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
              <Image
                src={talk.bannerImage}
                alt={talk.bannerAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  About This{" "}
                  {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {talk.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Topics Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {talk.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                  <Award className="h-5 w-5" />
                  Need a Speaker for Your Event?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-800 dark:text-blue-200">
                  I'm available for speaking engagements, workshops, and
                  mentoring sessions. Let's discuss how I can help your team or
                  community grow their technical skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <a
                      href="#contact"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Get in Touch
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a
                      href="mailto:doltons@example.com?subject=Speaking Opportunity&body=Hi Doltons, I'd like to discuss a speaking opportunity..."
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Email Directly
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Date
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(talk.date)}
                    </p>
                  </div>
                </div>

                {talk.duration && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Duration
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {talk.duration}
                      </p>
                    </div>
                  </div>
                )}

                {talk.audience && (
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Target Audience
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {talk.audience}
                      </p>
                    </div>
                  </div>
                )}

                {talk.platform && (
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Platform
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {talk.platform}
                      </p>
                    </div>
                  </div>
                )}

                {talk.attendees && talk.status === "past" && (
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Attendees
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {talk.attendees} people
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {talk.status === "upcoming" && talk.registrationUrl && (
                    <Button asChild className="w-full">
                      <a
                        href={talk.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Register Now
                      </a>
                    </Button>
                  )}

                  {talk.status === "past" && talk.recordingUrl && (
                    <Button variant="outline" asChild className="w-full">
                      <a
                        href={talk.recordingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Video className="h-4 w-4" />
                        Watch Recording
                      </a>
                    </Button>
                  )}

                  {talk.status === "ongoing" && talk.registrationUrl && (
                    <Button asChild className="w-full">
                      <a
                        href={talk.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Join Session
                      </a>
                    </Button>
                  )}

                  <Button variant="outline" asChild className="w-full">
                    <Link href="/#talks">View All Talks</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share This Talk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Found this interesting? Share it with your network!
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: talk.title,
                          text: talk.shortDesc,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                  >
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      navigator.clipboard.writeText(window.location.href)
                    }
                  >
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
