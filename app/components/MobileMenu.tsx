'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function MobileMenu() {
  return (
    <div className="lg:hidden fixed top-4 left-4 z-50">
      <Button variant="outline" size="icon">
        <Menu className="h-4 w-4" />
      </Button>
    </div>
  );
}
