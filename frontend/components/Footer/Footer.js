import React from 'react';
import Link from 'next/link';

import { Logo } from '@svg/Logo';
import { CopySocial } from './CopySocial';

import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <ul className={styles['foot-nav']}>
        <li>
          <Link scroll={false} href="/whiskey">
            <a>Hayashi Products</a>
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/">
            <a>Our Story</a>
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/craft">
            <a>Our Craft</a>
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <div className={styles.subscribe}>
        {/* @TODO :: Hook this up to mailchimp, waiting on client to set this up */}
        <label htmlFor="newsletter">Hear more from Hayashi</label>
        <form className={styles.mailchimp}>
          <input id="newsletter" placeholder="Enter e-mail" type="email" />
          <button type="submit">&rarr;</button>
        </form>
      </div>

      <Logo width={85} height={15} />

      <div className={styles['copy-social']}>
        <CopySocial />
      </div>
    </div>
  </footer>
);
