import heroFiveStars from "../assets/illustration-five-stars.webp";
import featureAiContent from "../assets/illustration-ai-content.webp";
import featureAudienceGrowth from "../assets/illustration-audience-growth.webp";
import featureConsistentSchedule from "../assets/illustration-consistent-schedule.webp";
import featureCreatePost from "../assets/illustration-create-post.webp";
import featureGrowFollowers from "../assets/illustration-grow-followers.webp";
import featureMultiplePlatforms from "../assets/illustration-multiple-platforms.webp";
import featureSchedulePosts from "../assets/illustration-schedule-posts.webp";

const Bento = () => {
  return (
    <main className="bento-grid">
      <Hero />
      <FeatureMultiplePlatforms />
      <FeatureConsistentSchedule />
      <FeatureSchedulePosts />
      <FeatureGrowFollowers />
      <FeatureAudienceGrowth />
      <FeatureCreatePost />
      <FeatureAiContent />
    </main>
  );
};

export default Bento;

const Hero = () => {
  return (
    <article className="bento-card bento-card--hero">
      <h1 className="bento-card__title">
        Social Media <span className="bento-card__title--highlight">10x</span>{" "}
        <em>Faster</em> with AI
      </h1>
      <figure className="bento-card__rating">
        <img
          src={heroFiveStars}
          alt=""
          aria-hidden="true"
          className="bento-card__rating-stars"
        />
        <figcaption className="bento-card__rating-text">
          Over 4,000 5-star reviews
        </figcaption>
      </figure>
    </article>
  );
};

const FeatureAiContent = () => {
  return (
    <article className="bento-card bento-card--ai-write bento-card--amber">
      <h2 className="bento-card__title">Write your content using AI.</h2>
      <img
        src={featureAiContent}
        alt=""
        className="bento-card__image"
        aria-hidden="true"
      />
    </article>
  );
};

const FeatureAudienceGrowth = () => {
  return (
    <article className="bento-card bento-card--growth-stat bento-card--white">
      <h2 className="bento-card__title">
        <span className="bento-card__stat-number">&gt;56%</span>
        <span className="bento-card__stat-label">faster audience growth</span>
      </h2>
      <img
        src={featureAudienceGrowth}
        alt=""
        className="bento-card__image"
        aria-hidden="true"
      />
    </article>
  );
};

const FeatureConsistentSchedule = () => {
  return (
    <article className="bento-card bento-card--consistent bento-card--amber">
      <h2 className="bento-card__title">
        Maintain a consistent posting schedule.
      </h2>
      <img
        src={featureConsistentSchedule}
        alt=""
        aria-hidden="true"
        className="bento-card__image"
      />
    </article>
  );
};

const FeatureCreatePost = () => {
  return (
    <article className="bento-card bento-card--create bento-card--cream">
      <h2 className="bento-card__title">
        Create and schedule content{" "}
        <em className="bento-card__title--emphasis">quicker.</em>
      </h2>
      <img
        src={featureCreatePost}
        alt=""
        className="bento-card__image"
        aria-hidden="true"
      />
    </article>
  );
};

const FeatureGrowFollowers = () => {
  return (
    <article className="bento-card bento-card--grow bento-card--purple">
      <img
        src={featureGrowFollowers}
        alt=""
        className="bento-card__image"
        aria-hidden="true"
      />
      <h2 className="bento-card__title">
        Grow followers with non-stop content.
      </h2>
    </article>
  );
};

const FeatureMultiplePlatforms = () => {
  return (
    <article className="bento-card bento-card--platforms bento-card--white">
      <img
        src={featureMultiplePlatforms}
        alt=""
        aria-hidden="true"
        className="bento-card__image"
      />
      <h2 className="bento-card__title">
        Manage multiple accounts and platforms.
      </h2>
    </article>
  );
};

const FeatureSchedulePosts = () => {
  return (
    <article className="bento-card bento-card--schedule bento-card--purple-light">
      <h2 className="bento-card__title">Schedule to social media.</h2>
      <img
        src={featureSchedulePosts}
        alt=""
        className="bento-card__image"
        aria-hidden="true"
      />
      <p className="bento-card__description">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </article>
  );
};
