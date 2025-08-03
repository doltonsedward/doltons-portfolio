import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9fafb',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Profile Circle */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1f2937',
            }}
          >
            DE
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '8px',
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Doltons Edward
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '24px',
              color: '#e5e7eb',
              marginBottom: '16px',
              fontWeight: '300',
            }}
          >
            Nicholas
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: '28px',
              color: '#ffffff',
              marginBottom: '24px',
              fontWeight: '500',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Full Stack Developer
          </div>

          {/* Tech Stack */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '16px',
            }}
          >
            {['React', 'Node.js', 'TypeScript', 'Next.js'].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              fontSize: '16px',
              color: '#d1d5db',
              marginTop: '32px',
              fontStyle: 'italic',
              maxWidth: '600px',
              lineHeight: '1.5',
            }}
          >
            "Code is poetry written in logic, where every line tells a story of possibility."
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '300',
          }}
        >
          dollong.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
} 