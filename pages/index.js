import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Adrian Jhan Arcega. I am a Software Engineer. I am also a student</p><hr /><hr />
        <h3>1. What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</h3>
        <p>I’m 20 years old, I always am curious about things(I love learning). I like reading, watching, playing badminton and volleyball. I often want to seek criticisms just to know on which part/s am I particularly strong and/or weak.<br /></p><hr />

<h3>2.  Why did you take up IT?</h3>
<p>Because of my love of technology.<br /></p><hr />

<h3>3.  What career do you see yourself exploring after graduation?</h3>
<p>I see myself as someone who works on programming.<br /></p><hr />

<h3>4.  What do you expect to learn in this subject?</h3>
<p>I expect that we will explore various subjects that are of significance to Information Technology.<br /></p><hr />

<h3>5.  What topics you want to be discussed in this subject?</h3>
<p>I want a discussion on how a functional web application is made.<br /></p><hr />
        
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}