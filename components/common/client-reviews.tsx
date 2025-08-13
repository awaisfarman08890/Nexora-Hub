"use client"
import { motion, cubicBezier, type Variants } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Star, Quote } from 'lucide-react'
import { useTheme } from "next-themes"

interface Review {
  id: number
  name: string
  position: string
  company: string
  review: string
  rating: number
  image: string
  gender: "male" | "female"
}

// Review data
const reviews: Review[] = [
  {
    id: 1,
    name: "Michelle Chen",
    position: "Marketing Director",
    company: "Elevate Digital",
    review:
      "Nexora Hub transformed our online presence completely. The conversion-focused design they created has increased our lead generation by 45% in just two months. Their team was responsive, professional, and truly understood our business goals.",
    rating: 5.0,
    image: "/logos/1.png",
    gender: "female",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CEO",
    company: "Nexus Solutions",
    review:
      "Working with Nexora Hub was a game-changer for our startup. Their automation expertise streamlined our operations and the website they built has received countless compliments from our clients. Highly recommend their services!",
    rating: 4.9,
    image: "/logos/2.png",
    gender: "female",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "E-commerce Manager",
    company: "StyleHouse",
    review:
      "Our e-commerce sales have increased by 78% since launching our new site with Nexora Hub. Their understanding of user experience and conversion optimization is exceptional. The ongoing support has been fantastic as well.",
    rating: 5.0,
    image: "/logos/3.png",
    gender: "female",
  },
  {
    id: 4,
    name: "James Patel",
    position: "Operations Director",
    company: "Quantum Finance",
    review:
      "The team at Nexora Hub delivered beyond our expectations. Their expertise in financial website design is evident in the sophisticated yet user-friendly platform they created for us. Our clients love the new interface.",
    rating: 4.8,
    image: "/logos/4.png",
    gender: "male",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Founder",
    company: "Wellness Collective",
    review:
      "Nexora Hub understood our vision perfectly and translated it into a beautiful, functional website that truly represents our brand. The design is not only aesthetically pleasing but also drives conversions effectively.",
    rating: 4.9,
    image: "/logos/5.png",
    gender: "male",
  },
  {
    id: 6,
    name: "Robert Thompson",
    position: "CTO",
    company: "InnovateTech",
    review:
      "As a technology company, we have high standards for our digital presence. Nexora Hub exceeded those standards with their technical expertise and creative approach. The custom solutions they implemented have significantly improved our user engagement.",
    rating: 5.0,
    image: "/logos/6.png",
    gender: "male",
  },
]

function ElegantShape({
  className,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  return (
    <div className={cn("absolute", className)}>
      <div
        style={{
          width,
          height,
          transform: `rotate(${rotate}deg)`,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            isDark 
              ? "backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" 
              : "backdrop-blur-[2px] border-2 border-black/[0.15] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
            isDark
              ? "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
              : "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"
          )}
        />
      </div>
    </div>
  )
}

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.05,
      ease: cubicBezier(0.25, 0.4, 0.25, 1),
    },
  }),
}

export default function ClientReviews() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  return (
    <section className={cn(
      "relative py-20 overflow-hidden",
      isDark ? "bg-[#030303]" : "bg-[#f8f8f8]"
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute inset-0 blur-3xl",
          isDark 
            ? "bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" 
            : "bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]"
        )} />

        <ElegantShape
          width={400}
          height={100}
          rotate={-15}
          gradient={isDark ? "from-indigo-500/[0.1]" : "from-indigo-500/[0.05]"}
          className="left-[-5%] top-[10%]"
        />

        <ElegantShape
          width={300}
          height={80}
          rotate={12}
          gradient={isDark ? "from-rose-500/[0.1]" : "from-rose-500/[0.05]"}
          className="right-[-2%] bottom-[15%]"
        />

        <ElegantShape
          width={200}
          height={50}
          rotate={-8}
          gradient={isDark ? "from-amber-500/[0.1]" : "from-amber-500/[0.05]"}
          className="left-[20%] bottom-[5%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: cubicBezier(0.25, 0.4, 0.25, 1) }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight",
            "bg-clip-text text-transparent",
            isDark 
              ? "bg-gradient-to-r from-white to-white/80" 
              : "bg-gradient-to-r from-black to-black/80"
          )}>
            Client Reviews
          </h2>
          <p className={cn(
            "text-base sm:text-lg mb-8 max-w-2xl mx-auto",
            isDark ? "text-white/50" : "text-black/60"
          )}>
            Don&apos;t just take our word for it. See what our clients have to say
            about working with{" "}
            <span className="text-indigo-400 font-medium">Nexora Hub</span>.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const { theme } = useTheme()
  const isDark = theme !== "light"
  
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-yellow-400" />
          <div className="absolute w-2 h-4 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )
    }

    return stars
  }

  return (
    <motion.div
      custom={index}
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        className={cn(
          "h-full p-6 md:p-8 rounded-2xl border backdrop-blur-sm",
          "transition-all duration-300",
          "hover:shadow-lg flex flex-col",
          isDark 
            ? "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-black/20" 
            : "border-black/[0.08] bg-black/[0.02] hover:bg-black/[0.04] hover:border-black/[0.15] hover:shadow-black/10"
        )}
      >
        {/* Quote Icon */}
        <div className="text-indigo-400/60 mb-4">
          <Quote size={32} />
        </div>

        {/* Review Text */}
        <p className={cn(
          "text-sm leading-relaxed mb-6 flex-grow italic",
          isDark ? "text-white/70" : "text-black/70"
        )}>
          &quot;{review.review}&quot;
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex mr-2">{renderStars(review.rating)}</div>
          <span className={cn(
            "text-sm",
            isDark ? "text-white/60" : "text-black/60"
          )}>
            {review.rating.toFixed(1)}
          </span>
        </div>

        {/* Reviewer Info */}
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-500/30">
            <Image
              src={review.image || "/placeholder.svg"}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className={isDark ? "text-white font-medium" : "text-black font-medium"}>{review.name}</h4>
            <p className={isDark ? "text-white/50 text-sm" : "text-black/50 text-sm"}>
              {review.position}, {review.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
