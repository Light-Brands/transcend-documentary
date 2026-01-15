# Hero Image Generation Prompts for TRANSCEND

A collection of AI image generation prompts designed to create visually stunning hero header images that integrate seamlessly with the Transcend Documentary visual identity.

---

## Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Obsidian Black | `#0A0A0A` | Primary dark background |
| Sacred Sage | `#bed5c5` | Primary accent |
| Sage Text | `#6a9b7e` | Darker accent for text |
| Bone/Cream | `#E8E4DC` | Warm neutral |
| Ember | `#D4A574` | Warm gold accent |
| Shadow Blue | `#1E2A33` | Atmospheric depth |
| Forest Green | `#2A4035` | Nature-inspired accent |

---

## Prompt 1: "The Journey Home" (Abstract/Symbolic)

**Best for:** Midjourney v6, DALL-E 3

```
Cinematic wide-angle photograph, 2.39:1 aspect ratio, a solitary figure standing at the edge of darkness and light, silhouette from behind, facing a distant warm glow on the horizon, muted sage green atmospheric fog, deep obsidian black shadows, film grain texture, ethereal light rays breaking through clouds, moody and introspective atmosphere, anamorphic lens flare, high contrast chiaroscuro lighting, documentary style, reminiscent of Terrence Malick cinematography, 8K resolution, color graded with deep blacks and desaturated warm tones
```

**Concept:** A lone traveler at the threshold between darkness and light, symbolizing the journey from pain to purpose.

---

## Prompt 2: "Emergence from Shadow" (Human-Centered)

**Best for:** Midjourney v6, Stable Diffusion XL

```
Dramatic portrait photograph, close-up of human hands emerging from complete darkness into soft sage-green tinted light, reaching upward, intimate and vulnerable, minimal color palette of obsidian black transitioning to muted green-gold highlights, film noir lighting with single key light source, 35mm film aesthetic with visible grain, shallow depth of field, symbolizing transformation and healing, documentary cinematography style, Kodak Portra 400 color science, 2.39:1 cinematic crop
```

**Concept:** Hands reaching from darkness into healing light—intimate, vulnerable, hopeful.

---

## Prompt 3: "The Threshold" (Architectural/Environmental)

**Best for:** Midjourney v6, DALL-E 3

```
Cinematic interior photograph, person standing in a doorway between a dark room and illuminated space, shot from behind, long shadows on wooden floor, warm amber light bleeding through the doorway mixing with cool sage-green ambient shadows, dust particles visible in light beams, minimalist therapeutic space aesthetic, feels sacred and contemplative, 2.39:1 anamorphic widescreen, vintage 70s Kodachrome color grading, high contrast with crushed blacks, film grain overlay, evokes the feeling of choosing to step into transformation
```

**Concept:** The moment of choosing to step from darkness into light—the threshold of transformation.

---

## Prompt 4: "Abstract Pain to Purpose" (Conceptual)

**Best for:** Midjourney v6, Leonardo AI

```
Abstract cinematic photograph, liquid-like dark obsidian shapes gradually transitioning into luminous sage-green and warm golden light, organic flowing forms suggesting transformation, deep blacks on the left side flowing into hopeful muted warmth on the right, subtle film grain texture, macro photography aesthetic, extremely shallow depth of field, bokeh light orbs in sage and amber tones, feels like watching darkness become light, painterly quality, 2.39:1 aspect ratio, reminiscent of Roger Deakins cinematography
```

**Concept:** Pure visual poetry—darkness flowing into light, pain transforming into purpose.

---

## Prompt 5: "The Sacred Container" (Environmental/Clinic-Inspired)

**Best for:** Midjourney v6, DALL-E 3

```
Cinematic wide shot, serene minimalist meditation or therapy space at dawn, natural light filtering through large windows, muted sage-green plants and cream-colored walls, single empty chair casting long shadow, morning mist visible in light rays, contemplative and sacred atmosphere, shot through doorway framing the scene, extremely shallow focus on the chair, documentary photography style, Alexa camera look, desaturated color palette emphasizing blacks sage-greens and bone-white tones, film grain, 2.39:1 letterbox format, evokes reverent healing space
```

**Concept:** The sacred space where transformation happens—the container for healing journeys.

---

## Prompt 6: "Faces in Shadow" (Character-Driven)

**Best for:** Midjourney v6, Stable Diffusion XL

```
Intimate cinematic portrait, profile silhouette of a contemplative person against soft sage-tinted gradient background, Rembrandt lighting with single light source, only edge of face illuminated in warm amber tone, deep obsidian shadows cover most of the frame, subtle catchlight in eye suggesting hope, extreme close-up, documentary portrait style, 35mm Kodak Vision3 film stock aesthetic, prominent film grain, muted desaturated color palette, emotionally powerful and introspective, 2.39:1 widescreen crop
```

**Concept:** A single human face emerging from shadow—intimate, introspective, emotionally powerful.

---

## Prompt 7: "The Path Through Darkness" (Landscape/Metaphor)

**Best for:** Midjourney v6, Leonardo AI

```
Atmospheric cinematic landscape, narrow path leading through dense dark forest into distant clearing with soft sage-green and golden light, fog rolling at ground level, bare tree silhouettes framing the composition, shot from ground level looking forward, leading lines drawing eye to the light, sense of journey and destination, extremely moody with crushed black shadows, film grain texture, color graded in deep forest greens transitioning to warm bone-colored light, 2.39:1 ultra-wide, inspired by Emmanuel Lubezki cinematography, feels like walking from pain toward purpose
```

**Concept:** The literal path through darkness toward light—a visual metaphor for the healing journey.

---

## Prompt 8: "Hands of Healing" (Detail/Symbolic)

**Best for:** Midjourney v6, DALL-E 3

```
Macro cinematic photograph, two hands gently touching or almost touching, one emerging from complete shadow one bathed in soft sage-green light, extreme close-up on the fingertips, therapeutic and sacred feeling, minimal composition with negative space, skin texture visible, film grain overlay, shallow depth of field with soft bokeh, color palette limited to obsidian black muted sage and warm skin tones, evokes connection healing and guidance, documentary intimate style, 2.39:1 crop, reminiscent of meaningful human connection
```

**Concept:** Human connection as the bridge between darkness and light—the healing touch.

---

## Style Modifier Tags

Add these to any prompt for consistent Transcend aesthetic:

### For Midjourney

```
--ar 21:9
--style raw
--s 200
--q 2
```

### Universal Descriptors

```
, color graded with LUT emphasizing sage greens (#bed5c5) and deep blacks (#0A0A0A)
, film grain 35mm texture
, anamorphic lens characteristics
, crushed blacks with lifted shadows
, desaturated warm highlights
, documentary cinematography
, reverent and contemplative mood
```

---

## Recommended Image Specifications

| Property | Value |
|----------|-------|
| **Aspect Ratio** | 21:9 or 2.39:1 (cinematic widescreen) |
| **Resolution** | 2688 x 1152 px minimum |
| **Retina Resolution** | 5376 x 2304 px recommended |
| **Color Profile** | sRGB |
| **File Format** | PNG or high-quality JPG (85%+) |
| **File Naming** | `hero-[concept-name].png` |

---

## Implementation Notes

Once an image is selected:

1. Place the image in `/public/images/hero/`
2. Optimize for web using tools like ImageOptim or Squoosh
3. Consider creating multiple sizes for responsive loading
4. The hero section supports overlay gradients that will blend with the image

### Recommended Image Variants

- `hero-desktop.png` - 2688 x 1152 px
- `hero-desktop@2x.png` - 5376 x 2304 px (retina)
- `hero-mobile.png` - 1200 x 1600 px (portrait crop for mobile)

---

## Visual Identity Alignment

These prompts are designed to complement:

- **Documentary Theme:** Human transformation, healing through darkness, journey from pain to purpose
- **Film Aesthetic:** 2.39:1 aspect ratio, letterboxing, grain texture, vignettes
- **Color Story:** Deep obsidian blacks flowing into sacred sage greens with warm ember accents
- **Mood:** Reverent, contemplative, hopeful, cinematic

---

*Document created for the Transcend Documentary project by Light Brands Collective*
