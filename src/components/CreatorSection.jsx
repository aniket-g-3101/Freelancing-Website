import FadeUp from "../animations/FadeUp";

export default function CreatorSection() {
  return (
    <section id="creator" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-8">
            Creator Work
          </h2>
        </FadeUp>

        {/* videos grid here */}
      </div>
    </section>
  );
}
