import Image from 'next/image';
import { SignupForm } from '@/components/auth/signup-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SignupPage() {
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'login-background'
  );

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          className="-z-10 object-cover"
          data-ai-hint={backgroundImage.imageHint}
          priority
        />
      )}
      <SignupForm />
    </main>
  );
}
