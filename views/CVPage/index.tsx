'use client';

import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';

import { useRouter } from '@/routes/navigation';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';
import CVTechnicalSkills from './CVTechnicalSkills';
import CVExperience from './CVExperience';
import CVEducation from './CVEducation';

export default function CVPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => window.open('/assets/doltons-cv.pdf', '_blank')}
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <CVHeader />
          <CVSummary />
          <CVTechnicalSkills />
          <CVExperience />
          <CVEducation />
        </div>
      </div>
    </div>
  );
}
