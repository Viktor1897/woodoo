import Image from "next/image";
import { COPY, GALLERY_ITEMS, REVIEWS, type Locale } from "@/data/simpleContent";
import { Badge, Section, SectionHeader } from "@/components/ui";
import styles from "./ReviewsGallerySection.module.css";

interface ReviewsGallerySectionProps {
  locale: Locale;
}

export function ReviewsGallerySection({ locale }: ReviewsGallerySectionProps) {
  const t = COPY[locale].reviews;

  return (
    <Section id="reviews" aria-labelledby="reviews-heading">
      <SectionHeader
        index={t.index}
        label={t.label}
        title={t.title}
        titleId="reviews-heading"
        lead={t.lead}
      />

      <div className={styles.galleryGrid}>
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.id} className={styles.figure} data-aspect={item.aspect}>
            <div className={styles.imgFrame}>
              <Image
                src={item.src}
                alt={item.alt[locale]}
                fill
                sizes="(max-width: 704px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className={styles.img}
              />
            </div>
            <figcaption className={styles.caption}>{item.caption[locale]}</figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.reviewsBlock}>
        <div className={styles.scorePanel}>
          <span className={styles.scoreValue}>5.0</span>
          <span className={styles.scoreStars} aria-label="5 out of 5 stars">
            ★ ★ ★ ★ ★
          </span>
          <p className={styles.scoreCount}>14,700+ Booksy &amp; Google</p>
          <p className={styles.scoreNote}>{t.scoreNote}</p>
        </div>

        <div className={styles.reviewsGrid}>
          {REVIEWS.map((review) => (
            <article key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewTop}>
                <span className={styles.reviewRating}>{review.rating} ★</span>
                <Badge variant="outline">
                  {review.source} · {review.locationLabel}
                </Badge>
              </div>
              <p className={styles.reviewText}>&ldquo;{review.text[locale]}&rdquo;</p>
              <div className={styles.reviewFooter}>
                <span className={styles.reviewAuthor}>{review.author}</span>
                <span className={styles.reviewDate}>{review.date[locale]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
