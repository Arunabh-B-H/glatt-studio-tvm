import React, { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import {
  Scissors,
  Sparkles,
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Compass,
  Eye,
  X,
  Menu,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Send,
  Bot,
  User,
  Volume2,
  VolumeX,
  Sparkle,
  Play,
  Film
} from 'lucide-react'

// --- OFFICIAL BRAND & SOCIAL SVG COMPONENTS ---

function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.81-.37-4.04-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.16 8.16 0 0 1-1.25-4.46c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.3-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
    </svg>
  )
}

function InstagramIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

// --- DATA DEFINITIONS ---

const SERVICES = [
  {
    id: 'haircut-classic',
    category: 'Hair Design',
    title: 'Signature Haircut & Styling',
    description: 'Precision cut tailored to your facial architecture and natural hair texture, followed by luxury blowdry and finish.',
    inclusions: 'Facial contour analysis, customized wash, precision shears sculpting, luxury blowout & styling cream',
    price: '₹450',
    duration: '45 mins'
  },
  {
    id: 'skin-fade',
    category: 'Men\'s Grooming',
    title: 'Skin Fade & Beard Sculpt',
    description: 'Master razor detailing, clean high/mid/low fade blending, and hot lather contour sculpting.',
    inclusions: 'Zero skin fade gradient, straight razor edge lining, botanical beard oil treatment & cooling tonic',
    price: '₹550',
    duration: '50 mins'
  },
  {
    id: 'bridal-makeover',
    category: 'Bridal & Makeup',
    title: 'Bridal Glamour & Muhurtham Artistry',
    description: 'Bespoke Kerala bridal transformation featuring HD radiance makeup, traditional hair draping, and floral ornamentation.',
    inclusions: 'Pre-wedding skin priming, HD water-resistant makeup, traditional saree/veil draping, fresh jasmine hair fixation',
    price: '₹12,000',
    duration: '180 mins'
  },
  {
    id: 'balayage-color',
    category: 'Hair Design',
    title: 'Balayage & Dimensional Color',
    description: 'Hand-painted sunlit highlights, ammonia-free root melt, toner gloss, and bond-building treatment.',
    inclusions: 'Color consultation, gentle freehand painting, customized gloss toner & plex bond fortification',
    price: '₹3,800',
    duration: '150 mins'
  },
  {
    id: 'keratin-botox',
    category: 'Hair Design',
    title: 'Keratin Smoothing & Hair Botox',
    description: 'Deep restorative protein infusion eliminating frizz and imparting mirror-like gloss that lasts 4 to 6 months.',
    inclusions: 'Clarifying wash, amino-acid infusion, heat sealing, deep lipid seal mask & at-home care guide',
    price: '₹4,500',
    duration: '120 mins'
  },
  {
    id: 'moroccan-spa',
    category: 'Spa Rituals',
    title: 'Moroccan Argan Hair Spa Ritual',
    description: 'Deep scalp cleansing, warm botanical steam, intensive argan lipid masque, and stress-relieving acupressure massage.',
    inclusions: 'Aromatherapy scalp detox, warm herbal steam dome, 20-min shoulder acupressure & blowout',
    price: '₹1,500',
    duration: '60 mins'
  },
  {
    id: 'luxury-massage',
    category: 'Spa Rituals',
    title: 'Aromatherapy Head & Shoulder Spa',
    description: 'Therapeutic head, neck, and shoulder massage using warm botanical essential oils to melt away tension.',
    inclusions: 'Warm customized herbal oil blend, marma point stimulation, neck relief stretch & herbal tea service',
    price: '₹1,800',
    duration: '60 mins'
  },
  {
    id: 'hydra-facial',
    category: 'Skin & Beauty',
    title: 'Hydra-Luxe Glow Skin Therapy',
    description: 'Gentle exfoliation, deep vortex vacuum extraction, peptide infusion, and calming cryo-cooling globe finish.',
    inclusions: 'Double botanical cleanse, gentle AHA/BHA peel, vortex pore cleansing, hyaluronic sheet mask & cryo balls',
    price: '₹2,800',
    duration: '75 mins'
  },
  {
    id: 'groom-package',
    category: 'Men\'s Grooming',
    title: 'Executive Grooming Package',
    description: 'Signature haircut, beard re-shaping, deep clarifying scalp wash, charcoal face cleanup, and hot towel finish.',
    inclusions: 'Haircut & styling, hot towel beard sculpting, charcoal clay exfoliation & relaxing neck massage',
    price: '₹1,600',
    duration: '90 mins'
  }
]

const CATEGORIES = ['All', 'Hair Design', 'Bridal & Makeup', 'Skin & Beauty', 'Spa Rituals', 'Men\'s Grooming']

const STATS = [
  { value: '28+', label: 'Years of Heritage', desc: 'Crafting beauty in Kowdiar since 1996' },
  { value: '35k+', label: 'Delighted Patrons', desc: 'Generations of trusted families' },
  { value: '4.2★', label: 'Google Rating', desc: '574+ Verified Google client reviews' },
  { value: '100%', label: 'Unisex Craftsmanship', desc: 'Dedicated zones for men & women' }
]

const GALLERY_CATEGORIES = ['All', 'Videos & Reels', 'Bridal Artistry', "Men's Grooming", 'Ambiance & Craft']

const GALLERY_ITEMS = [
  {
    type: 'image',
    title: 'Kerala Muhurtham Bridal Artistry',
    category: 'Bridal Artistry',
    src: '/images/gallery-kasavu-bridal.jpg',
    desc: 'Traditional Kerala Kasavu bridal makeover featuring royal temple jewelry styling, velvet crimson lips, and fresh rose adornments.'
  },
  {
    type: 'video',
    title: 'Royal Couple Reception Makeover',
    category: 'Bridal & Groom Couture',
    badge: 'Reel • 4K HD',
    src: '/videos/couple.mp4',
    desc: 'Bespoke Kerala reception makeover featuring an ivory sequin bridal gown, radiant HD soft glam, and royal embroidered sherwani groom architecture.'
  },
  {
    type: 'image',
    title: 'Festive Radiance & Jasmine Bun',
    category: 'Festive & Party Makeup',
    src: '/images/gallery-festive-glam.png',
    desc: 'Luminous soft-glam makeover paired with a sculpted floral low bun adorned with fragrant fresh jasmine, crafted for celebrations and receptions.'
  },
  {
    type: 'video',
    title: 'Signature Groom Fade & Beard Sculpt',
    category: "Men's Grooming",
    badge: 'Reel • 4K HD',
    src: '/videos/groom.mp4',
    desc: 'High-definition textured pompadour fade, master straight-razor beard contouring, and luxury executive finish for wedding celebrations.'
  },
  {
    type: 'image',
    title: 'Kowdiar Salon Sanctuary',
    category: 'Ambiance',
    src: '/images/salon-interior.jpg',
    desc: 'Warm ambient arch mirrors, bespoke leather chairs, and private aesthetic suites.'
  },
  {
    type: 'image',
    title: 'Precision Men’s Styling',
    category: "Men's Grooming",
    src: '/images/mens-grooming.jpg',
    desc: 'Sharp zero skin fades, hot towel razor contouring, and bespoke beard craftsmanship.'
  },
  {
    type: 'image',
    title: 'Luminous Balayage Waves',
    category: 'Color Artistry',
    src: '/images/hair-color.jpg',
    desc: 'Multi-dimensional caramel & mocha gloss tones hand-painted with bond builders.'
  },
  {
    type: 'image',
    title: 'Kerala Bridal Elegance',
    category: 'Bridal Artistry',
    src: '/images/bridal-art.jpg',
    desc: 'Luminous bridal glam with delicate jasmine styling and royal Kerala gold accents.'
  },
  {
    type: 'image',
    title: 'Aromatic Spa Therapy',
    category: 'Spa Rituals',
    src: '/images/spa-wellness.jpg',
    desc: 'Steaming herbal scalp therapy, argan hair baths, and revitalizing acupressure.'
  },
  {
    type: 'image',
    title: 'Shear Precision at Work',
    category: 'Master Craft',
    src: '/images/hero-bg.jpg',
    desc: 'The art of bespoke haircutting by master stylists with over 28 years of pedigree.'
  }
]

const TESTIMONIALS = [
  {
    name: 'Anjana Mohan',
    location: 'Kowdiar, Trivandrum',
    date: '14.03.2026',
    rating: 5,
    service: 'Bridal Makeup & Hair',
    review: 'Got my wedding muhurtham makeup and hair done at The Glatt. Everyone praised how radiant, elegant, and natural it looked throughout the ceremony. The team is extraordinarily skilled and attentive.'
  },
  {
    name: 'Rahul V. Nair',
    location: 'Kanaka Nagar',
    date: '02.04.2026',
    rating: 5,
    service: 'Fade & Beard Sculpt',
    review: 'Been visiting The Glatt since my college days. The precision haircut and beard detailing are unmatched anywhere in Trivandrum. Pure craft and warm hospitality every single visit.'
  },
  {
    name: 'Sneha Kurien',
    location: 'Vellayambalam',
    date: '28.05.2026',
    rating: 5,
    service: 'Keratin & Moroccan Spa',
    review: 'The Moroccan hair spa is pure relaxation! My hair felt silky and healthy for weeks. Truly a five-star salon experience right on Keston Road.'
  },
  {
    name: 'Gopakumar P.',
    location: 'Sasthamangalam',
    date: '19.06.2026',
    rating: 5,
    service: 'Executive Grooming',
    review: 'Super clean, professional, and punctual. You can feel the 28 years of experience in how calmly and precisely they treat your hair. Best unisex salon in Trivandrum.'
  }
]

const TEAM = [
  {
    name: 'Arun & Master Team',
    role: 'Creative Director & Founder',
    specialty: 'Bespoke Hair Architecture & Salon Craft',
    experience: '28+ Years',
    image: '/images/stylist-arun.jpg',
    tag: '@arunglatt'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Senior Bridal & Skin Aesthetician',
    specialty: 'HD Bridal Makeovers & Facial Aesthetics',
    experience: '14 Years',
    image: '/images/stylist-bridal.jpg',
    tag: 'Bridal Specialist'
  },
  {
    name: 'Vikram Raj',
    role: 'Master Barber & Grooming Specialist',
    specialty: 'Razor Detailing, Fades & Beard Contouring',
    experience: '12 Years',
    image: '/images/stylist-barber.jpg',
    tag: 'Grooming Expert'
  },
  {
    name: 'Maya Varma',
    role: 'Color Artistry & Texture Specialist',
    specialty: 'Balayage, Keratin Smoothing & Hair Botox',
    experience: '9 Years',
    image: '/images/stylist-colorist.jpg',
    tag: 'Color Artist'
  }
]

// --- SMART AI CONCIERGE CHATBOT RESPONSES ---

const BOT_QUICK_PROMPTS = [
  { label: '💇 Haircut recommendation', query: 'What haircut suits my face shape?' },
  { label: '👰 Bridal packages & rates', query: 'Tell me about bridal makeup packages and price' },
  { label: '✨ Keratin vs Botox hair', query: 'What is the difference between Keratin and Hair Botox?' },
  { label: '📍 Location & parking', query: 'Where is the salon located and is parking available?' },
  { label: '🕒 Today\'s hours', query: 'What are your working hours today?' },
  { label: '📅 Book appointment', query: 'I want to schedule an appointment' }
]

function getBotReply(userText) {
  const q = userText.toLowerCase().trim()

  if (q.includes('bridal') || q.includes('wedding') || q.includes('muhurtham') || q.includes('makeup')) {
    return {
      text: "Our Bridal Artistry is led by Senior Aesthetician Sarah Jenkins and Creative Director Arun. Our signature Muhurtham package (₹12,000) includes customized HD bridal makeup, traditional hair draping with fresh jasmine ornamentation, pre-wedding skin priming, and veil styling. We also offer pre-bridal trials in Kowdiar!",
      actions: [
        { label: 'Book Bridal Consultation', action: 'book_bridal' },
        { label: 'WhatsApp Bridal Desk', action: 'whatsapp_bridal' }
      ]
    }
  }

  if (q.includes('haircut') || q.includes('hair cut') || q.includes('fade') || q.includes('beard') || q.includes('grooming')) {
    return {
      text: "We specialize in bespoke Hair Architecture for both men and women! Signature Cuts start from ₹450 (includes wash & blowout), Master Skin Fades & Beard Sculpting are ₹550, and our Executive Grooming Package is ₹1,600. Every cut begins with facial contour analysis.",
      actions: [
        { label: 'Book Haircut Now', action: 'book_haircut' },
        { label: 'View Service Menu', action: 'scroll_services' }
      ]
    }
  }

  if (q.includes('keratin') || q.includes('botox') || q.includes('smoothing') || q.includes('frizz')) {
    return {
      text: "Both are client favorites! ✨ Keratin Smoothing (from ₹4,500) creates ultra-sleek, mirror-gloss straightness for 4-6 months. Hair Botox is a deep restorative cold/warm hydration filler that rejuvenates dull hair while keeping natural wave without damage. Our team assesses your hair texture first.",
      actions: [
        { label: 'Book Texture Consultation', action: 'book_keratin' }
      ]
    }
  }

  if (q.includes('color') || q.includes('balayage') || q.includes('highlights') || q.includes('dye')) {
    return {
      text: "Our Balayage & Dimensional Color treatments start at ₹3,800. We exclusively use premium ammonia-free formulations with bond-building plex infusions to guarantee zero damage, rich shine, and sunlit dimension tailored to your skin undertone.",
      actions: [
        { label: 'Book Balayage Slot', action: 'book_balayage' }
      ]
    }
  }

  if (q.includes('spa') || q.includes('facial') || q.includes('skin') || q.includes('massage')) {
    return {
      text: "Relax in our private therapy suites! 🌿 We offer the Moroccan Argan Hair Spa (₹1,500 / 60m), Aromatherapy Head & Shoulder Massage (₹1,800 / 60m), and Hydra-Luxe Glow Skin Therapy (₹2,800 / 75m). Pure rejuvenation in the heart of Kowdiar.",
      actions: [
        { label: 'Book Spa Ritual', action: 'book_spa' }
      ]
    }
  }

  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('reach') || q.includes('parking') || q.includes('landmark')) {
    return {
      text: "We are located at TC/24, 3437/1, Keston Road, Kanaka Nagar, Kowdiar, Thiruvananthapuram (Kerala 695003). Conveniently situated right off the main Kowdiar junction with dedicated client parking and tranquil air-conditioned suites.",
      actions: [
        { label: 'Open Google Maps', action: 'maps' },
        { label: 'Call Salon Desk', action: 'call' }
      ]
    }
  }

  if (q.includes('hour') || q.includes('timing') || q.includes('time') || q.includes('open') || q.includes('close') || q.includes('sunday')) {
    return {
      text: "The Glatt Salon is open 7 days a week, Monday through Sunday from 9:00 AM to 8:30 PM. Walk-ins are welcome, though appointments are recommended for minimal waiting time.",
      actions: [
        { label: 'Reserve Today\'s Slot', action: 'book_general' }
      ]
    }
  }

  if (q.includes('book') || q.includes('appointment') || q.includes('schedule') || q.includes('slot')) {
    return {
      text: "I can help you reserve right now! You can pick your desired service and preferred master stylist, or send a pre-filled booking directly to our WhatsApp concierge desk at +91 98959 70069.",
      actions: [
        { label: 'Open Appointment Form', action: 'book_general' },
        { label: 'Direct WhatsApp Booking', action: 'whatsapp_general' }
      ]
    }
  }

  if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('charges')) {
    return {
      text: "Our starting rates: Haircuts ₹450 | Fades & Beard ₹550 | Executive Grooming ₹1,600 | Moroccan Spa ₹1,500 | Hydra-Luxe Facial ₹2,800 | Balayage ₹3,800 | Keratin ₹4,500 | Bridal Muhurtham ₹12,000. All prices reflect master craftsmanship with premium formulations.",
      actions: [
        { label: 'View Full Menu', action: 'scroll_services' },
        { label: 'Book Service', action: 'book_general' }
      ]
    }
  }

  return {
    text: "Welcome to The Glatt Salon (Est. 1996, Kowdiar)! 💫 Whether you are looking for a precision haircut, dimensional balayage, relaxing Moroccan spa ritual, or bridal makeover, our master team is here for you. How may I guide you?",
    actions: [
      { label: 'View Services & Rates', action: 'scroll_services' },
      { label: 'Book an Appointment', action: 'book_general' },
      { label: 'WhatsApp Concierge', action: 'whatsapp_general' }
    ]
  }
}

// --- MAIN APPLICATION COMPONENT ---

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingService, setBookingService] = useState('Signature Haircut & Styling')
  const [bookingStylist, setBookingStylist] = useState('Any Available Stylist')
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('11:00 AM')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  
  // Interactive Service Details Accordion
  const [expandedServiceId, setExpandedServiceId] = useState(null)

  // Interactive Style Matcher Widget State
  const [matcherGender, setMatcherGender] = useState('unisex')
  const [matcherGoal, setMatcherGoal] = useState('hair')
  
  // Gallery Lightbox & Slider
  const [galleryCategory, setGalleryCategory] = useState('All')
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null)
  
  // Mobile Nav & UI
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Sound Experience Toggle
  const [soundEnabled, setSoundEnabled] = useState(false)

  // Luxury Branded Preloader State (Always initializes on 100% of page reloads & visits)
  const [showPreloader, setShowPreloader] = useState(true)
  const [preloaderProgress, setPreloaderProgress] = useState(0)
  const [preloaderExiting, setPreloaderExiting] = useState(false)
  const [isPageRevealed, setIsPageRevealed] = useState(false)

  // Interactive Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! Welcome to The Glatt Salon, Kowdiar. ✨ I am your Virtual Beauty & Grooming Concierge. How can I assist your styling journey today?",
      time: 'Just now',
      actions: [
        { label: '💇 Haircuts & Grooming', query: 'What haircuts and grooming do you offer?' },
        { label: '👰 Bridal Makeover', query: 'Tell me about bridal makeup packages' },
        { label: '📍 Location in Kowdiar', query: 'Where is the salon in Kowdiar?' },
        { label: '📅 Reserve a Slot', query: 'I want to schedule an appointment' }
      ]
    }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false)
  const [unreadChatBadge, setUnreadChatBadge] = useState(true)
  const chatMessagesEndRef = useRef(null)

  // Scroll to bottom of chat
  useEffect(() => {
    if (isChatOpen) {
      chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages, isBotTyping, isChatOpen])

  // Play subtle haptic sine sound
  const playSoftChime = () => {
    if (!soundEnabled) return
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(880, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.1)
      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.23)
    } catch (e) {}
  }

  // Initialize Lenis Smooth Inertial Scrolling (Momentum-driven smooth scrolling)
  const lenisRef = useRef(null)

  // Luxury Preloader (Guaranteed 1.6–1.8s smooth progression from 0% to 100% on every reload)
  useEffect(() => {
    // Lock scrolling while preloader is running
    document.body.style.overflow = 'hidden'
    lenisRef.current?.stop()

    const startTime = performance.now()
    const duration = 1750 // Guaranteed 1.75s animation duration
    let animationFrameId

    // Natural luxury easing curve:
    // Faster from 0% to 65%, slight luxury pause around 75–85%, then smoothly completing to 100%
    const getProgress = (t) => {
      if (t <= 0) return 0
      if (t >= 1) return 100
      let p
      if (t < 0.42) {
        const k = t / 0.42
        // Fast, energetic rise from 0% to 65%
        p = 65 * (1 - Math.pow(1 - k, 2.2))
      } else if (t < 0.72) {
        const k = (t - 0.42) / 0.30
        // Soft deceleration and luxury breathing pause across 75% to 84%
        p = 65 + 19 * Math.sin((k * Math.PI) / 2)
      } else {
        const k = (t - 0.72) / 0.28
        // Smooth final completion from 84% to 100%
        p = 84 + 16 * (1 - Math.pow(1 - k, 1.8))
      }
      return Math.min(100, Math.max(0, Math.round(p)))
    }

    const animate = (now) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(1, elapsed / duration)
      const currentPercent = getProgress(rawProgress)
      setPreloaderProgress(currentPercent)

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        // Enforce clean 100%
        setPreloaderProgress(100)

        // Hold briefly at 100% so completion is seen, then initiate upward curtain wipe
        setTimeout(() => {
          setPreloaderExiting(true)
          setIsPageRevealed(true)
          document.body.style.overflow = ''
          lenisRef.current?.start()

          // After upward curtain wipe transition finishes (750ms), unmount preloader from DOM
          setTimeout(() => {
            setShowPreloader(false)
          }, 750)
        }, 140)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis
    window.__lenis = lenis

    if (showPreloader) {
      lenis.stop()
    }

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercept in-page anchor links for silky smooth gliding
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          lenis.scrollTo(target, { offset: -70, duration: 1.2 })
        }
      } else if (href === '#') {
        e.preventDefault()
        lenis.scrollTo(0, { duration: 1.0 })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('scroll', handleScroll)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  // Scroll-Triggered Reveal Animations Observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    })

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectedCategory, galleryCategory])

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory)

  const filteredGalleryItems = GALLERY_ITEMS.filter(item => {
    if (galleryCategory === 'All') return true
    if (galleryCategory === 'Videos & Reels') return item.type === 'video'
    if (galleryCategory === 'Bridal Artistry') return item.category.toLowerCase().includes('bridal') || item.category.toLowerCase().includes('festive')
    if (galleryCategory === "Men's Grooming") return item.category.toLowerCase().includes('men') || item.category.toLowerCase().includes('groom')
    if (galleryCategory === 'Ambiance & Craft') return item.category.toLowerCase().includes('ambiance') || item.category.toLowerCase().includes('craft') || item.category.toLowerCase().includes('color') || item.category.toLowerCase().includes('spa')
    return true
  })

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return
      if (e.key === 'Escape') setActiveLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredGalleryItems.length)
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredGalleryItems.length) % filteredGalleryItems.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeLightboxIndex, filteredGalleryItems.length])

  const openBookingWithService = (serviceTitle) => {
    playSoftChime()
    setBookingService(serviceTitle)
    setIsBookingOpen(true)
    setBookingSuccess(false)
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    playSoftChime()
    setBookingSuccess(true)
  }

  const handleWhatsAppDirect = () => {
    playSoftChime()
    const text = encodeURIComponent(
      `Hello The Glatt Salon, I would like to book an appointment.\n\n` +
      `• Service: ${bookingService || 'Hair/Beauty/Spa'}\n` +
      `• Stylist: ${bookingStylist}\n` +
      `• Date: ${bookingDate || 'Flexible'}\n` +
      `• Time: ${bookingTime}\n` +
      `• Name: ${clientName || 'Guest'}\n` +
      `• Phone: ${clientPhone || 'Not specified'}\n` +
      `\nPlease confirm availability. Thank you!`
    )
    window.open(`https://wa.me/919895970069?text=${text}`, '_blank')
  }

  // Handle Chatbot Submissions
  const handleSendChat = (customText) => {
    const msg = customText || chatInput
    if (!msg.trim()) return

    playSoftChime()
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: msg,
      time: 'Just now'
    }

    setChatMessages(prev => [...prev, userMsg])
    setChatInput('')
    setIsBotTyping(true)

    // Simulate smart thinking delay
    setTimeout(() => {
      const replyData = getBotReply(msg)
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyData.text,
        actions: replyData.actions,
        time: 'Just now'
      }
      setChatMessages(prev => [...prev, botMsg])
      setIsBotTyping(false)
      playSoftChime()
    }, 650)
  }

  const handleChatAction = (action) => {
    playSoftChime()
    if (action === 'book_bridal') openBookingWithService('Bridal Glamour & Muhurtham Artistry')
    else if (action === 'book_haircut') openBookingWithService('Signature Haircut & Styling')
    else if (action === 'book_keratin') openBookingWithService('Keratin Smoothing & Hair Botox')
    else if (action === 'book_balayage') openBookingWithService('Balayage & Dimensional Color')
    else if (action === 'book_spa') openBookingWithService('Moroccan Argan Hair Spa Ritual')
    else if (action === 'book_general') openBookingWithService('Signature Haircut & Styling')
    else if (action === 'whatsapp_bridal') {
      window.open('https://wa.me/919895970069?text=Hi%20The%20Glatt%20Salon%2C%20I%20am%20inquiring%20about%20Bridal%20Muhurtham%20Packages', '_blank')
    }
    else if (action === 'whatsapp_general') {
      window.open('https://wa.me/919895970069?text=Hi%20The%20Glatt%20Salon%2C%20I%20am%20chatting%20with%20your%20virtual%20concierge%20and%20would%20like%20to%20book%20an%20appointment', '_blank')
    }
    else if (action === 'maps') {
      window.open('https://www.google.com/maps/dir//The+Glatt+Salon,+TC%2F24,+3437%2F1,+Keston+Rd,+PO,+Kanaka+Nagar,+Kowdiar,+Thiruvananthapuram,+Keralam+695003/@8.9194496,76.6312448,14z', '_blank')
    }
    else if (action === 'call') {
      window.location.href = 'tel:09895970069'
    }
    else if (action === 'scroll_services') {
      setIsChatOpen(false)
      const el = document.getElementById('services')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Recommendation engine for Matcher widget
  const getMatcherResult = () => {
    if (matcherGoal === 'bridal') {
      return {
        service: 'Bridal Glamour & Muhurtham Artistry',
        price: '₹12,000',
        duration: '180 mins',
        specialist: 'Sarah Jenkins (Bridal Aesthetician)',
        desc: 'Bespoke HD bridal transformation with traditional floral styling.'
      }
    }
    if (matcherGoal === 'color') {
      return {
        service: 'Balayage & Dimensional Color',
        price: '₹3,800',
        duration: '150 mins',
        specialist: 'Maya Varma (Color Artist)',
        desc: 'Sunlit hand-painted dimension with ammonia-free bond therapy.'
      }
    }
    if (matcherGoal === 'spa') {
      return {
        service: 'Moroccan Argan Hair Spa Ritual',
        price: '₹1,500',
        duration: '60 mins',
        specialist: 'Master Spa Therapist',
        desc: 'Deep scalp cleansing, warm botanical steam dome, and acupressure.'
      }
    }
    if (matcherGender === 'men') {
      return {
        service: 'Skin Fade & Beard Sculpt',
        price: '₹550',
        duration: '50 mins',
        specialist: 'Vikram Raj (Master Barber)',
        desc: 'High-contrast skin fade with razor edging and botanical oils.'
      }
    }
    return {
      service: 'Signature Haircut & Styling',
      price: '₹450',
      duration: '45 mins',
      specialist: 'Arun & Master Team',
      desc: 'Precision architectural cut tailored to your facial symmetry.'
    }
  }

  const matcherResult = getMatcherResult()

  return (
    <div className="page-wrapper">

      {/* =========================================================================
          LUXURY BRANDED PRELOADER OVERLAY (0-100% LOADER)
         ========================================================================= */}
      {showPreloader && (
        <div
          className={`preloader-overlay ${preloaderExiting ? 'preloader-exiting' : ''}`}
          id="glatt-preloader"
          aria-hidden={preloaderExiting}
        >
          {/* Ambient Breathing Radial Glow behind logo (#c03b8c & #9333ea) */}
          <div className="preloader-ambient-glow" aria-hidden="true" />

          <div className="preloader-content">
            {/* Centered Logo Asset (180px–220px max width) */}
            <div className="preloader-logo-wrap">
              <img
                src="/the_glatt_logo.png"
                alt="The Glatt Salon"
                className="preloader-logo-img"
              />
            </div>

            {/* Minimal, elegant 0% to 100% counter & ultra-thin gradient progress line */}
            <div className="preloader-counter-block">
              <div className="preloader-counter-row">
                <span className="preloader-percent">{preloaderProgress}%</span>
              </div>
              <div className="preloader-track">
                <div
                  className="preloader-fill"
                  style={{ width: `${preloaderProgress}%` }}
                />
              </div>
              <div className="preloader-meta">
                <span>KOWDIAR, TRIVANDRUM</span>
                <span className="preloader-meta-dot">•</span>
                <span>EST. 1996</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ambient Moving Aurora Glows */}
      <div className="ambient-aurora-orb orb-1"></div>
      <div className="ambient-aurora-orb orb-2"></div>

      {/* =========================================================================
          FLOATING QUICK-CONNECT SIDE DOCK (LEFT SCREEN EDGE)
          WhatsApp, Instagram & Facebook with Luxury Hover Glows & Tooltips
         ========================================================================= */}
      <aside className="floating-social-rail" aria-label="Official Social Channels">
        <div className="floating-social-capsule">
          <div className="social-rail-indicator" title="The Glatt Salon Direct Channels">
            <span className="social-rail-dot"></span>
          </div>

          <a
            href="https://wa.me/919895970069"
            target="_blank"
            rel="noreferrer"
            className="floating-social-btn btn-whatsapp glow-hover"
            aria-label="Direct WhatsApp (+91 98959 70069)"
            onClick={playSoftChime}
          >
            <WhatsAppIcon size={18} />
            <span className="floating-social-tooltip">WhatsApp Direct</span>
          </a>

          <a
            href="https://www.instagram.com/theglattsalon/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="floating-social-btn btn-instagram glow-hover"
            aria-label="Instagram @theglattsalon"
            onClick={playSoftChime}
          >
            <InstagramIcon size={18} />
            <span className="floating-social-tooltip">Instagram @theglattsalon</span>
          </a>

          <a
            href="https://m.facebook.com/people/The-Glatt-Beauty-salon/100063777041897/?locale=hi_IN"
            target="_blank"
            rel="noreferrer"
            className="floating-social-btn btn-facebook glow-hover"
            aria-label="Facebook Page"
            onClick={playSoftChime}
          >
            <FacebookIcon size={18} />
            <span className="floating-social-tooltip">Facebook Page</span>
          </a>
        </div>
      </aside>
      
      {/* =========================================================================
          1. FLOATING HEADER / NAVBAR (PURE CSS)
         ========================================================================= */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-custom nav-container">
          
          {/* Brand Logo with Official Glatt Badge */}
          <a href="#" className="nav-brand" onClick={playSoftChime}>
            <div className="nav-logo-box">
              <img
                src="/the_glatt_logo.png"
                alt="The Glatt Salon Logo"
                className="nav-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <div className="nav-brand-title">
                THE GLATT
                <span className="nav-brand-badge">1996</span>
              </div>
              <span className="nav-brand-subtitle">Unisex Salon & Spa</span>
            </div>
          </a>

          {/* Desktop Navigation Links — Uncluttered & Spacious */}
          <nav className="nav-links">
            <a href="#services" className="nav-link-item" onClick={playSoftChime}>Services</a>
            <a href="#matcher" className="nav-link-item" onClick={playSoftChime}>Style Matcher</a>
            <a href="#numbers" className="nav-link-item" onClick={playSoftChime}>Craft</a>
            <a href="#gallery" className="nav-link-item" onClick={playSoftChime}>Gallery</a>
            <a href="#reviews" className="nav-link-item" onClick={playSoftChime}>Reviews</a>
            <a href="#visit" className="nav-link-item" onClick={playSoftChime}>Find Us</a>
          </nav>

          {/* Header Actions — Cleaned and Balanced */}
          <div className="nav-actions">
            
            <div className="nav-status-badge">
              <span className="pulse-green"></span>
              <span>Open · Closes 8:30 pm</span>
            </div>

            <button
              onClick={() => openBookingWithService('Signature Haircut & Styling')}
              className="nav-btn-book glow-hover"
            >
              Book appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => {
              playSoftChime()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer animate-slide-down">
            <a href="#services" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Our Services & Pricing</a>
            <a href="#matcher" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Interactive Style Matcher</a>
            <a href="#numbers" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Heritage & The Numbers</a>
            <a href="#gallery" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Visual Gallery</a>
            <a href="#team" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Master Stylists</a>
            <a href="#reviews" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Google Reviews</a>
            <a href="#visit" onClick={() => { playSoftChime(); setMobileMenuOpen(false); }} className="mobile-nav-link">Kowdiar Location & Maps</a>
            
            {/* Mobile Social Connections */}
            <div className="mobile-social-row">
              <span className="mobile-social-label">Connect with Us:</span>
              <div className="mobile-social-icons">
                <a
                  href="https://wa.me/919895970069"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-btn mobile-wa"
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/theglattsalon/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-btn mobile-ig"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://m.facebook.com/people/The-Glatt-Beauty-salon/100063777041897/?locale=hi_IN"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-btn mobile-fb"
                >
                  <FacebookIcon size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openBookingWithService('Signature Haircut & Styling')
                }}
                className="btn-primary-white"
                style={{ width: '100%', padding: '14px' }}
              >
                Book appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          2. HERO SECTION (WHERE STYLE MEETS CRAFT)
         ========================================================================= */}
      <section className={`hero-section ${isPageRevealed ? 'is-revealed' : ''}`}>
        
        {/* Background Image & Vignettes */}
        <div className="hero-bg-layer">
          <img
            src="/images/hero-bg.jpg"
            alt="The Glatt Salon Hero"
            className="hero-bg-img"
          />
          <div className="hero-vignette-bottom"></div>
          <div className="hero-vignette-side"></div>
        </div>

        {/* Top Pedigree Badge with Page-Load Entrance & Hover Slide Shift */}
        <div className="container-custom hero-top-badge hero-reveal-badge">
          <div
            className="hero-badge-pill interactive-pill hero-slide-badge"
            role="button"
            tabIndex={0}
          >
            <span className="badge-glow-dot"></span>
            <span>EST. 1996 • KOWDIAR, THIRUVANANTHAPURAM • UNISEX SALON & SPA</span>
          </div>
        </div>

        {/* Center Monumental Headline with Staggered Entrance Reveal & Hover Slide Effect */}
        <div className="container-custom hero-content">
          <div className="hero-showcase-slide-group">
            <h1 className="hero-headline hero-slide-headline">
              <div className="hero-reveal-line hero-reveal-line-1">
                <span className="hero-slide-row hero-slide-row-1">Where Style</span>
              </div>
              <div className="hero-reveal-line hero-reveal-line-2">
                <span className="hero-slide-row hero-slide-row-2">
                  <span className="hero-headline-italic shimmer-text">Meets Craft</span>
                </span>
              </div>
            </h1>
            <div className="hero-reveal-subtitle">
              <p className="hero-subtitle hero-slide-subtitle">
                Thiruvananthapuram’s premier unisex salon since 1996. Bespoke haircutting, radiant bridal makeup, advanced skin aesthetics, and restorative spa rituals crafted with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Ace Barbers Full-Width Border Box CTA */}
        <div className="container-custom hero-footer-bar animate-fade-up-delay">
          <div
            onClick={() => openBookingWithService('Signature Haircut & Styling')}
            className="hero-cta-banner interactive-card"
            role="button"
            tabIndex={0}
          >
            <div className="cta-banner-left">
              <Scissors size={24} style={{ color: '#fff' }} className="cta-icon-spin" />
              <span className="cta-banner-title">Book appointment</span>
            </div>
            <div className="cta-banner-right">
              <span className="cta-banner-tag">Reserve your slot</span>
              <ArrowRight size={24} className="cta-arrow" />
            </div>
          </div>

          {/* Bottom Trust & Credibility Strip */}
          <div className="hero-trust-bar">
            <div className="trust-items">
              <a
                href="https://www.google.com/search?q=the+glatt+salon+trivandrum"
                target="_blank"
                rel="noreferrer"
                className="trust-link hover-underline"
              >
                <span className="star-rating-pill">★★★★★</span>
                <span style={{ fontWeight: 700, color: '#fff' }}>4.2</span>
                <span style={{ textDecoration: 'underline' }}>(574 Google reviews)</span>
              </a>
              <span className="trust-divider">•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} style={{ color: 'var(--accent-glatt-light)' }} />
                Kanaka Nagar, Kowdiar
              </span>
              <span className="trust-divider">•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} style={{ color: 'var(--accent-glatt-light)' }} />
                098959 70069 / 0471 2723003
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={14} style={{ color: '#4ade80' }} />
              <span>Open Daily 9:00 AM – 8:30 PM</span>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          3. SMOOTH INFINITE MARQUEE TICKER
         ========================================================================= */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[1, 2].map((loop) => (
            <React.Fragment key={loop}>
              <div className="marquee-item">HAIR ARCHITECTURE <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">SIGNATURE BRIDAL ARTISTRY <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">KERATIN & HAIR BOTOX <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">PRECISION MEN’S GROOMING <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">AROMATHERAPY SPA RITUALS <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">HYDRA-LUXE SKINCARE <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">ESTABLISHED 1996 <span className="marquee-dot">✦</span></div>
              <div className="marquee-item">KOWDIAR, THIRUVANANTHAPURAM <span className="marquee-dot">✦</span></div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES SECTION (OUR SERVICES) + INTERACTIVE ACCORDION
         ========================================================================= */}
      <section id="services" className="services-section">
        <div className="container-custom">
          
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Menu & Treatments</span>
              <h2 className="section-title">Our services</h2>
            </div>
            <p className="section-desc">
              Every appointment is built around precision, bespoke consultation, and high-end formulations tailored to your lifestyle.
            </p>
          </div>

          {/* Filter Pills with Sticky Presentation Slider Feel */}
          <div className="category-tabs sticky-category-tabs reveal-on-scroll reveal-delay-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  playSoftChime()
                  setSelectedCategory(cat)
                }}
                className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Cards List with Inclusions Dropdown & Cursor-Reactive Slide */}
          {/* Interactive Cards List with Inclusions Dropdown & In-Place Accordion */}
          <div className="service-cards-list reveal-on-scroll reveal-delay-1">
            {filteredServices.map((service) => {
              const isExpanded = expandedServiceId === service.id
              return (
                <div
                  key={service.id}
                  className={`service-card interactive-service ${isExpanded ? 'card-expanded' : ''}`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
                  }}
                >
                  <div className="service-card-spotlight" aria-hidden="true" />
                  <div
                    className="service-card-main-row"
                    onClick={() => {
                      playSoftChime()
                      setExpandedServiceId(isExpanded ? null : service.id)
                    }}
                  >
                    <div className="service-card-left">
                      <span className={`service-arrow ${isExpanded ? 'rotate-down' : ''}`}>→</span>
                      <div>
                        <div className="service-title-wrap">
                          <h3 className="service-card-title">{service.title}</h3>
                          <span className="service-duration-badge">{service.duration}</span>
                        </div>
                        <p className="service-card-desc">{service.description}</p>
                      </div>
                    </div>

                    <div className="service-card-right">
                      <div className="service-price-block">
                        <span className="service-price-from">From</span>
                        <span className="service-price-num">{service.price}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          openBookingWithService(service.title)
                        }}
                        className="service-book-action glow-button"
                      >
                        Book
                      </button>
                    </div>
                  </div>

                  {/* Smooth in-place Accordion Drawer (CSS Grid 0fr -> 1fr) */}
                  <div className={`service-accordion-wrapper ${isExpanded ? 'is-open' : ''}`} aria-hidden={!isExpanded}>
                    <div className="service-accordion-inner">
                      <div className="service-expansion-drawer">
                        <div className="expansion-details">
                          <div className="expansion-badge">
                            <Sparkles size={14} style={{ color: 'var(--accent-glatt-light)' }} />
                            <span>What’s Included:</span>
                          </div>
                          <p className="expansion-text">{service.inclusions}</p>
                        </div>
                        <div className="expansion-actions">
                          <button
                            onClick={() => openBookingWithService(service.title)}
                            className="btn-primary-white btn-sm"
                          >
                            Book this Service ({service.price})
                          </button>
                          <a
                            href={`https://wa.me/919895970069?text=${encodeURIComponent(`Hi The Glatt Salon, I would like to book ${service.title} (${service.price})`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-whatsapp-sm"
                          >
                            <WhatsAppIcon size={14} />
                            <span>WhatsApp Direct</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
            Custom bridal packages, corporate grooming, and group spa bookings available upon consultation.
          </div>

        </div>
      </section>

      {/* =========================================================================
          4B. INTERACTIVE STYLE & ESTIMATOR MATCHER (FLASHY PRESENTATION FEATURE)
         ========================================================================= */}
      <section id="matcher" className="matcher-section">
        <div className="container-custom">
          
          <div className="matcher-card-wrapper interactive-card reveal-on-scroll">
            <div className="matcher-header">
              <div className="hero-badge-pill" style={{ display: 'inline-flex', marginBottom: '12px' }}>
                <Sparkle size={12} style={{ color: 'var(--accent-glatt-light)' }} />
                <span>INTERACTIVE CONSULTATION ENGINE</span>
              </div>
              <h3 className="matcher-title font-serif">
                Find Your Signature Style & Estimate
              </h3>
              <p className="matcher-subtitle">
                Select your preferences below to discover your recommended treatment, master specialist, and starting price.
              </p>
            </div>

            <div className="matcher-selectors-grid">
              
              {/* Category selector */}
              <div>
                <label className="matcher-label">1. Preference</label>
                <div className="matcher-pill-group">
                  {[
                    { id: 'unisex', label: 'Unisex Craft' },
                    { id: 'women', label: 'Women’s Luxury' },
                    { id: 'men', label: 'Men’s Grooming' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => { playSoftChime(); setMatcherGender(item.id); }}
                      className={`matcher-choice-pill ${matcherGender === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal selector */}
              <div>
                <label className="matcher-label">2. Desired Transformation</label>
                <div className="matcher-pill-group">
                  {[
                    { id: 'hair', label: 'Precision Haircut' },
                    { id: 'bridal', label: 'Bridal Artistry' },
                    { id: 'color', label: 'Balayage & Color' },
                    { id: 'spa', label: 'Aromatic Spa Therapy' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => { playSoftChime(); setMatcherGoal(item.id); }}
                      className={`matcher-choice-pill ${matcherGoal === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Matched Result Box with interactive shine */}
            <div className="matcher-result-card animate-fade-up">
              <div className="result-card-left">
                <span className="result-tag">Recommended Experience</span>
                <h4 className="result-title font-serif">{matcherResult.service}</h4>
                <p className="result-desc">{matcherResult.desc}</p>
                <div className="result-artist-pill">
                  <User size={13} style={{ color: 'var(--accent-glatt-light)' }} />
                  <span>Lead Artist: <strong>{matcherResult.specialist}</strong></span>
                </div>
              </div>

              <div className="result-card-right">
                <div className="result-price-box">
                  <span className="result-price-label">Estimated Investment</span>
                  <div className="result-price-val">{matcherResult.price}</div>
                  <span className="result-duration">Approx {matcherResult.duration}</span>
                </div>
                <button
                  onClick={() => openBookingWithService(matcherResult.service)}
                  className="btn-primary-white"
                  style={{ width: '100%', padding: '12px 20px', fontWeight: 700 }}
                >
                  Book This Experience
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. NUMBERS & HERITAGE (THE NUMBERS)
         ========================================================================= */}
      <section id="numbers" className="numbers-section">
        <div className="container-custom">
          
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Heritage & Milestones</span>
              <h2 className="section-title">The Numbers</h2>
            </div>
          </div>

          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <div key={i} className={`stat-card interactive-stat reveal-on-scroll reveal-delay-${(i % 4) + 1}`}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="heritage-banner interactive-card reveal-on-scroll reveal-delay-2">
            <div className="heritage-text-left">
              <span className="section-tag">Since 1996 • Three Decades of Trust</span>
              <h3 className="heritage-quote">
                "At The Glatt Salon, every appointment is built around precision, craftsmanship, and personal comfort."
              </h3>
              <p className="heritage-subtext">
                Founded in Trivandrum with a vision for modern unisex hairstyling, we have remained at the vanguard of hair trends, skin science, and Kerala bridal makeover aesthetics for over 28 years.
              </p>
            </div>
            <div className="heritage-buttons">
              <button
                onClick={() => openBookingWithService('Signature Haircut & Styling')}
                className="btn-primary-white"
              >
                Experience the Craft
              </button>
              <a href="#visit" className="btn-outline-white">
                Visit Kowdiar Studio
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. GALLERY (VISUAL CRAFT WITH SLIDER LIGHTBOX)
         ========================================================================= */}
      <section id="gallery" className="gallery-section">
        <div className="container-custom">
          
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Portfolio & Ambiance</span>
              <h2 className="section-title">Gallery</h2>
            </div>
            <p className="section-desc">
              Step inside our sanctuary on Keston Road. An interplay of moody elegance, skilled hands, and transformative aesthetics.
            </p>
          </div>

          {/* Interactive Gallery Category Filters */}
          <div className="gallery-filter-tabs reveal-on-scroll reveal-delay-1">
            {GALLERY_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  playSoftChime()
                  setGalleryCategory(cat)
                  setActiveLightboxIndex(null)
                }}
                className={`category-tab-btn ${galleryCategory === cat ? 'active' : ''}`}
              >
                {cat === 'Videos & Reels' && (
                  <Play size={11} style={{ marginRight: '6px', display: 'inline-block' }} fill="currentColor" />
                )}
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGalleryItems.map((item, index) => (
              <div
                key={item.src}
                onClick={() => {
                  playSoftChime()
                  setActiveLightboxIndex(index)
                }}
                className={`gallery-card interactive-gallery ${item.type === 'video' ? 'gallery-card-video' : ''} reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
              >
                {item.type === 'video' ? (
                  <div className="gallery-video-wrap">
                    <video
                      src={item.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="gallery-video-thumb"
                    />
                    <div className="gallery-video-badge">
                      <Play size={10} fill="currentColor" />
                      <span>{item.badge || 'Reel'}</span>
                    </div>
                  </div>
                ) : (
                  <img src={item.src} alt={item.title} loading="lazy" />
                )}
                <div className="gallery-overlay">
                  <span className="gallery-cat">{item.category}</span>
                  <h4 className="gallery-title">{item.title}</h4>
                  <p className="gallery-desc">{item.desc}</p>
                  <div className="gallery-zoom-pill">
                    {item.type === 'video' ? <Play size={12} fill="currentColor" /> : <Eye size={12} />}
                    <span>{item.type === 'video' ? 'Watch video reel' : 'View full screen'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Lightbox with Prev / Next Navigation Slider */}
          {activeLightboxIndex !== null && filteredGalleryItems[activeLightboxIndex] && (
            <div className="lightbox-modal" onClick={() => setActiveLightboxIndex(null)}>
              
              <button
                className="lightbox-close-btn"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Prev Button */}
              <button
                className="lightbox-nav-btn lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  playSoftChime()
                  setActiveLightboxIndex((prev) => (prev - 1 + filteredGalleryItems.length) % filteredGalleryItems.length)
                }}
                aria-label="Previous item"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next Button */}
              <button
                className="lightbox-nav-btn lightbox-next"
                onClick={(e) => {
                  e.stopPropagation()
                  playSoftChime()
                  setActiveLightboxIndex((prev) => (prev + 1) % filteredGalleryItems.length)
                }}
                aria-label="Next item"
              >
                <ChevronRight size={28} />
              </button>

              <div className="lightbox-content animate-fade-up" onClick={e => e.stopPropagation()}>
                {filteredGalleryItems[activeLightboxIndex].type === 'video' ? (
                  <div className="lightbox-video-container">
                    <video
                      key={filteredGalleryItems[activeLightboxIndex].src}
                      src={filteredGalleryItems[activeLightboxIndex].src}
                      controls
                      autoPlay
                      playsInline
                      className="lightbox-video"
                    />
                  </div>
                ) : (
                  <img
                    src={filteredGalleryItems[activeLightboxIndex].src}
                    alt={filteredGalleryItems[activeLightboxIndex].title}
                    className="lightbox-img"
                  />
                )}
                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                  <div className="lightbox-index-pill">
                    {filteredGalleryItems[activeLightboxIndex].type === 'video' ? 'VIDEO REEL • ' : ''}
                    {activeLightboxIndex + 1} / {filteredGalleryItems.length}
                  </div>
                  <h4 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff', marginTop: '6px' }}>
                    {filteredGalleryItems[activeLightboxIndex].title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {filteredGalleryItems[activeLightboxIndex].desc}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          7. TESTIMONIALS (WHAT THEY SAY)
         ========================================================================= */}
      <section id="reviews" className="reviews-section">
        <div className="container-custom">
          
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Client Testimonials</span>
              <h2 className="section-title">What They Say</h2>
            </div>
            
            <a
              href="https://www.google.com/search?q=the+glatt+salon+trivandrum"
              target="_blank"
              rel="noreferrer"
              className="google-review-badge interactive-card"
            >
              <span style={{ color: 'var(--accent-gold)' }}>★★★★★</span>
              <span style={{ fontWeight: 700 }}>4.2</span>
              <span style={{ color: 'var(--text-secondary)' }}>· 574 Google reviews</span>
              <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
            </a>
          </div>

          <div className="reviews-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className={`review-card interactive-review reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}>
                <div>
                  <div className="review-card-top">
                    <div className="review-stars">
                      {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <span className="review-date">{t.date}</span>
                  </div>
                  <p className="review-quote">
                    "{t.review}"
                  </p>
                </div>

                <div className="review-footer">
                  <div>
                    <span className="reviewer-name">{t.name}</span>
                    <span className="reviewer-loc">{t.location}</span>
                  </div>
                  <span className="review-service-pill">{t.service}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. THE TEAM
         ========================================================================= */}
      <section id="team" className="team-section">
        <div className="container-custom">
          
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Artisans & Stylists</span>
              <h2 className="section-title">The Team</h2>
            </div>
            <p className="section-desc">
              Trained under global academies and guided by decades of hands-on hair and beauty mastery in Trivandrum.
            </p>
          </div>

          <div className="team-grid">
            {TEAM.map((stylist, index) => (
              <div key={index} className={`team-card interactive-card reveal-on-scroll reveal-delay-${(index % 4) + 1}`}>
                <div className="team-photo-wrap">
                  <img src={stylist.image} alt={stylist.name} />
                  <span className="team-exp-badge">{stylist.experience}</span>
                </div>

                <div className="team-card-body">
                  <div>
                    <span className="team-tag">{stylist.tag}</span>
                    <h3 className="team-name">{stylist.name}</h3>
                    <p className="team-role">{stylist.role}</p>
                    <p className="team-spec">{stylist.specialty}</p>
                  </div>

                  <button
                    onClick={() => {
                      setBookingStylist(stylist.name)
                      setIsBookingOpen(true)
                    }}
                    className="team-book-btn glow-hover"
                  >
                    Book with {stylist.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. VISIT US / SOCIAL CONNECT & INSTANT BOOKING
         ========================================================================= */}
      <section id="visit" className="location-section">
        <div className="container-custom">
          
          <div className="location-layout">
            
            {/* Left Info Column */}
            <div className="location-info-column">
              <div className="reveal-on-scroll">
                <span className="section-tag">Visit Kowdiar</span>
                <h2 className="section-title">
                  Connect & Experience <br />
                  The Glatt Studio
                </h2>
                <p className="section-desc" style={{ marginTop: '16px' }}>
                  Conveniently situated in Kanaka Nagar, Kowdiar, Thiruvananthapuram. Ample parking, tranquil air-conditioned private styling zones, and welcoming hospitality.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="info-cards-grid">
                
                {/* 1. Address Card */}
                <div className="info-card interactive-card reveal-on-scroll reveal-delay-1">
                  <MapPin size={22} className="info-card-icon" />
                  <h4 className="info-card-title">Studio Location</h4>
                  <p className="info-card-text">
                    TC/24, 3437/1, Keston Rd,<br />
                    PO, Kanaka Nagar, Kowdiar,<br />
                    Thiruvananthapuram, Kerala 695003
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//The+Glatt+Salon,+TC%2F24,+3437%2F1,+Keston+Rd,+PO,+Kanaka+Nagar,+Kowdiar,+Thiruvananthapuram,+Keralam+695003/@8.9194496,76.6312448,14z"
                    target="_blank"
                    rel="noreferrer"
                    className="info-card-link"
                  >
                    <span>Get Driving Directions</span>
                    <ArrowRight size={13} />
                  </a>
                </div>

                {/* 3. Hours Card */}
                <div className="info-card interactive-card reveal-on-scroll reveal-delay-2">
                  <Clock size={22} className="info-card-icon" />
                  <h4 className="info-card-title">Operating Hours</h4>
                  <div className="info-card-text" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Mon – Sun:</span>
                      <strong style={{ color: '#fff' }}>9:00am – 8:30pm</strong>
                    </div>
                    <div style={{ color: '#4ade80', fontWeight: 600, marginTop: '8px' }}>
                      Open 7 Days a Week
                    </div>
                  </div>
                </div>

                {/* 4. Telephone & Virtual Card */}
                <div className="info-card interactive-card reveal-on-scroll reveal-delay-3">
                  <Phone size={22} className="info-card-icon" />
                  <h4 className="info-card-title">Direct Inquiries</h4>
                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a href="tel:09895970069" style={{ color: '#fff', fontWeight: 600 }}>
                      +91 98959 70069
                    </a>
                    <a href="tel:04712723003" style={{ color: '#fff', fontWeight: 600 }}>
                      0471 2723003
                    </a>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <a
                      href="https://www.google.com/local/place/fid/0x3b05bba934576a77:0x4ebe7ab810559db8/photosphere"
                      target="_blank"
                      rel="noreferrer"
                      className="info-card-link"
                      style={{ marginTop: 0 }}
                    >
                      <Eye size={13} />
                      <span>360° Google Virtual Tour</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Booking Form Card */}
            <div className="booking-form-card interactive-card reveal-on-scroll reveal-delay-2">
              <div className="form-header">
                <div>
                  <h3 className="form-title">Instant Appointment</h3>
                  <p className="form-subtitle">Choose your service and schedule directly</p>
                </div>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={20} style={{ color: 'var(--accent-glatt)' }} />
                </div>
              </div>

              <form onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label className="form-label">Selected Service</label>
                  <select
                    value={bookingService}
                    onChange={e => setBookingService(e.target.value)}
                    required
                    className="form-select"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Artist</label>
                  <select
                    value={bookingStylist}
                    onChange={e => setBookingStylist(e.target.value)}
                    className="form-select"
                  >
                    <option value="Any Available Stylist">Any Available Master Stylist</option>
                    {TEAM.map((t, idx) => (
                      <option key={idx} value={t.name}>{t.name} ({t.role})</option>
                    ))}
                  </select>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={e => setBookingDate(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Time Slot</label>
                    <select
                      value={bookingTime}
                      onChange={e => setBookingTime(e.target.value)}
                      className="form-select"
                    >
                      <option value="9:30 AM">9:30 AM (Morning)</option>
                      <option value="11:00 AM">11:00 AM (Morning)</option>
                      <option value="1:30 PM">1:30 PM (Afternoon)</option>
                      <option value="3:30 PM">3:30 PM (Afternoon)</option>
                      <option value="5:30 PM">5:30 PM (Evening)</option>
                      <option value="7:00 PM">7:00 PM (Evening)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Arun Kumar"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 98959 70069"
                      value={clientPhone}
                      onChange={e => setClientPhone(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="form-btn-whatsapp glow-hover"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Confirm via WhatsApp Desk</span>
                  </button>
                  <button
                    type="submit"
                    className="form-btn-submit glow-button"
                  >
                    Request Callback
                  </button>
                </div>

                {bookingSuccess && (
                  <div className="success-alert animate-fade-down">
                    <CheckCircle2 size={18} style={{ color: '#22c55e', flexShrink: 0 }} />
                    <span>
                      Thank you! Your request has been logged. Our reception desk will contact {clientPhone || 'you'} shortly to confirm your slot.
                    </span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10. FOOTER WITH RICH SOCIAL LOGOS
         ========================================================================= */}
      <footer className="site-footer">
        <div className="container-custom">
          
          <div className="footer-top-grid">
            
            <div className="footer-brand-col">
              <div className="footer-logo-row">
                <img
                  src="/the_glatt_logo.png"
                  alt="Glatt Logo"
                  className="footer-logo-img"
                />
                <span className="footer-brand-title">THE GLATT SALON</span>
              </div>
              <p className="footer-brand-desc">
                Trivandrum’s benchmark unisex salon and luxury spa. Since 1996, dedicated to precision styling, bridal radiance, and uncompromising customer care.
              </p>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                TC/24, 3437/1, Keston Rd, Kanaka Nagar, Kowdiar, Thiruvananthapuram, Kerala 695003
              </div>

              {/* Footer Quick Social Row */}
              <div className="footer-social-icons-row">
                <a
                  href="https://wa.me/919895970069"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle social-wa"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href="https://www.instagram.com/theglattsalon/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle social-ig"
                  title="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://m.facebook.com/people/The-Glatt-Beauty-salon/100063777041897/?locale=hi_IN"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle social-fb"
                  title="Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
              </div>
            </div>

            <div>
              <h5 className="footer-heading">Navigation</h5>
              <ul className="footer-links-list">
                <li><a href="#services">Our Services & Pricing</a></li>
                <li><a href="#matcher">Interactive Style Matcher</a></li>
                <li><a href="#numbers">Heritage & Craft</a></li>
                <li><a href="#gallery">Visual Gallery</a></li>
                <li><a href="#team">Master Stylists</a></li>
                <li><a href="#reviews">Google Reviews</a></li>
              </ul>
            </div>

            <div>
              <h5 className="footer-heading">Connect With Us</h5>
              <ul className="footer-links-list footer-connect-list">
                <li>
                  <a href="https://wa.me/919895970069" target="_blank" rel="noreferrer" className="footer-connect-link">
                    <span className="connect-icon-box wa-box"><WhatsAppIcon size={15} /></span>
                    <span>WhatsApp: +91 98959 70069</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/theglattsalon/?hl=en" target="_blank" rel="noreferrer" className="footer-connect-link">
                    <span className="connect-icon-box ig-box"><InstagramIcon size={15} /></span>
                    <span>Instagram: @theglattsalon</span>
                  </a>
                </li>
                <li>
                  <a href="https://m.facebook.com/people/The-Glatt-Beauty-salon/100063777041897/?locale=hi_IN" target="_blank" rel="noreferrer" className="footer-connect-link">
                    <span className="connect-icon-box fb-box"><FacebookIcon size={15} /></span>
                    <span>Facebook: The Glatt Beauty Salon</span>
                  </a>
                </li>
                <li>
                  <a href="tel:09895970069" className="footer-connect-link">
                    <span className="connect-icon-box phone-box"><Phone size={15} /></span>
                    <span>Mobile: 098959 70069</span>
                  </a>
                </li>
                <li>
                  <a href="tel:04712723003" className="footer-connect-link">
                    <span className="connect-icon-box phone-box"><Phone size={15} /></span>
                    <span>Desk: 0471 2723003</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom-bar">
            <div>
              © 1996 – {new Date().getFullYear()} The Glatt Salon. All rights reserved. Unisex Salon • Hair | Makeup | Beauty | Spa.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span>Kanaka Nagar, Kowdiar</span>
              <span>•</span>
              <a href="#" className="hover-underline" style={{ color: '#fff' }}>Back to Top ↑</a>
            </div>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          11. APPOINTMENT MODAL (ON CTA CLICK)
         ========================================================================= */}
      {isBookingOpen && (
        <div className="appointment-modal-overlay" onClick={() => setIsBookingOpen(false)}>
          <div className="appointment-modal-box animate-scale-up" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsBookingOpen(false)}>
              <X size={18} />
            </button>

            <div style={{ marginBottom: '24px' }}>
              <span className="section-tag">Reservation Desk</span>
              <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#fff', marginTop: '4px' }}>
                Book Your Appointment
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                The Glatt Salon • Keston Rd, Kowdiar
              </p>
            </div>

            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label className="form-label">Selected Service</label>
                <select
                  value={bookingService}
                  onChange={e => setBookingService(e.target.value)}
                  className="form-select"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Stylist</label>
                <select
                  value={bookingStylist}
                  onChange={e => setBookingStylist(e.target.value)}
                  className="form-select"
                >
                  <option value="Any Available Stylist">Any Available Master Stylist</option>
                  {TEAM.map((t, i) => (
                    <option key={i} value={t.name}>{t.name} ({t.role})</option>
                  ))}
                </select>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={e => setBookingDate(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Time</label>
                  <select
                    value={bookingTime}
                    onChange={e => setBookingTime(e.target.value)}
                    className="form-select"
                  >
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="form-btn-whatsapp"
                >
                  <WhatsAppIcon size={16} />
                  <span>Send Request via WhatsApp</span>
                </button>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="tel:09895970069"
                    className="btn-outline-white"
                    style={{ flex: 1, textAlign: 'center', padding: '12px' }}
                  >
                    Call: 098959 70069
                  </a>
                  <button
                    type="submit"
                    className="btn-primary-white"
                    style={{ flex: 1, padding: '12px' }}
                  >
                    Submit Request
                  </button>
                </div>
              </div>

              {bookingSuccess && (
                <div className="success-alert">
                  ✓ Request logged successfully! We will call you shortly to confirm your time slot.
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          12. INTERACTIVE AI SALON CONCIERGE (CHATBOT WIDGET)
         ========================================================================= */}
      
      {/* Floating Chat Trigger Button */}
      <div className="chatbot-floating-trigger">
        <button
          onClick={() => {
            playSoftChime()
            setIsChatOpen(!isChatOpen)
            setUnreadChatBadge(false)
          }}
          className={`chatbot-trigger-btn glow-hover ${isChatOpen ? 'chat-is-open' : ''}`}
          aria-label={isChatOpen ? "Close Glatt Salon Concierge" : "Open Glatt Salon Concierge"}
        >
          <div className="chatbot-trigger-inner">
            {isChatOpen ? (
              <X size={20} className="chatbot-trigger-close-icon" />
            ) : (
              <>
                <img
                  src="/favicon.png"
                  alt="Glatt Concierge"
                  className="chatbot-trigger-avatar-img"
                />
                <span className="chatbot-online-badge"></span>
              </>
            )}
          </div>
          <span className="chatbot-trigger-text">
            {isChatOpen ? 'Close Concierge' : 'Glatt Concierge'}
          </span>
          {unreadChatBadge && !isChatOpen && (
            <span className="chatbot-unread-dot" title="Ask us anything"></span>
          )}
        </button>
      </div>

      {/* Interactive Chatbot Modal Window */}
      {isChatOpen && (
        <div className="chatbot-window-overlay" onClick={() => setIsChatOpen(false)}>
          <div className="chatbot-window-box animate-scale-up" onClick={e => e.stopPropagation()}>
            
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-left">
                <div className="chatbot-avatar-box">
                  <img src="/favicon.png" alt="Glatt Logo" className="chatbot-avatar-img" />
                  <span className="chatbot-online-pulse"></span>
                </div>
                <div>
                  <h4 className="chatbot-header-title">Glatt Concierge</h4>
                  <p className="chatbot-header-sub">Virtual Beauty & Grooming Guide • Kowdiar</p>
                </div>
              </div>

              <div className="chatbot-header-actions">
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="chatbot-action-icon"
                  title="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="chatbot-messages-body">
              {chatMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`chat-bubble-wrap ${msg.sender === 'user' ? 'wrap-user' : 'wrap-bot'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="chat-avatar-mini">
                      <img src="/favicon.png" alt="Glatt" className="chat-avatar-mini-img" />
                    </div>
                  )}

                  <div className={`chat-bubble ${msg.sender === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                    <p className="bubble-text">{msg.text}</p>
                    
                    {/* Interactive Action Buttons if attached */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="chat-actions-container">
                        {msg.actions.map((act, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (act.query) handleSendChat(act.query)
                              else if (act.action) handleChatAction(act.action)
                            }}
                            className="chat-action-pill"
                          >
                            <span>{act.label}</span>
                            <ArrowRight size={11} />
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="bubble-timestamp">{msg.time}</span>
                  </div>
                </div>
              ))}

              {/* Bot typing simulation indicator */}
              {isBotTyping && (
                <div className="chat-bubble-wrap wrap-bot">
                  <div className="chat-avatar-mini">
                    <img src="/favicon.png" alt="Glatt" className="chat-avatar-mini-img" />
                  </div>
                  <div className="chat-bubble bubble-bot typing-bubble">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              )}

              <div ref={chatMessagesEndRef} />
            </div>

            {/* Quick Suggestions Bar */}
            <div className="chatbot-quick-chips">
              {BOT_QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendChat(prompt.query)}
                  className="quick-chip-btn"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendChat()
              }}
              className="chatbot-input-form"
            >
              <input
                type="text"
                placeholder="Ask about haircuts, bridal, rates, Kowdiar..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                className="chatbot-input-field"
              />
              <button
                type="submit"
                className="chatbot-send-btn glow-hover"
                disabled={!chatInput.trim()}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  )
}
