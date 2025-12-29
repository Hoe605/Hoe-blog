import React from 'react';
import styles from './TimelineEntry.module.css';

interface TimelineEntryProps {
  title: string;
  url: string;
  date: Date;
  description?: string;
  side: 'left' | 'right';
}

export default function TimelineEntry({ title, url, date, description, side }: TimelineEntryProps) {
  // Format date similar to FormattedDate.astro
  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const sideClass = side === 'left' ? styles.left : styles.right;

  return (
    <div className={`${styles.entry} ${sideClass}`}>
      <div className={styles.marker}></div>
      <div className={styles.content}>
        <span className={styles.date}>
          <time dateTime={new Date(date).toISOString()}>
            {formattedDate}
          </time>
        </span>
        <h2 className={styles.title}>
          <a href={url} className={styles.link}>{title}</a>
        </h2>
        {description && (
          <p className={styles.desc}>{description}</p>
        )}
      </div>
    </div>
  );
}
