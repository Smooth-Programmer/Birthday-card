import type { PhotoCollageProps, Photo } from "../types/birthday"

export default function PhotoCollage({ photos }: Readonly<PhotoCollageProps>) {
  // Default photos - replace with your actual photos
  const defaultPhotos: Photo[] = [
  { id: 1, src: "/images/sneha.jpeg", alt: "Goa Trip 🌴" },
  { id: 2, src: "/images/sneha.jpeg", alt: "Birthday Night 🎂" },
];


  const photosToDisplay = photos || defaultPhotos

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Our Beautiful Memories 📸</h2>
      <div className="grid grid-cols-2 gap-4">
        {photosToDisplay.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
      <p className="text-center text-white/80 text-sm mt-4">
        💡 Jaskaran & Sneha - 1st met on 21 Dec!
      </p>
    </div>
  )
}

function PhotoItem({ photo }: { photo: Photo }) {
  return (
    <div className="relative overflow-hidden rounded-lg transform transition-transform hover:scale-105 duration-300">
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <p className="text-white text-sm">{photo.alt}</p>
      </div>
    </div>
  )
}
