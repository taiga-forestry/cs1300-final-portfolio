import LabeledImage from "@/app/(components)/image/LabeledImage";
import SideLine from "@/app/(components)/line/SideLine";
import Separator from "@/app/(components)/line/Separator";
import partiful from "../../../../public/partiful/partiful.png";
import songsketch1 from "../../../../public/partiful/songsketch1.png";
import songsketch2 from "../../../../public/partiful/songsketch2.png";
import songlofi from "../../../../public/partiful/songlofi.png";
import songhifi from "../../../../public/partiful/songhifi.png";
import themesketch from "../../../../public/partiful/themesketch.png";
import themehifi from "../../../../public/partiful/themehifi.png";

export default function Partiful() {
  return (
    <main className="xs:px-48 lg:px-[120px] py-24 c-column">
      <SideLine text="Partiful" />
      <p className="text-14 self-start xs:mb-36 sm:mb-0"> Designing new, fun features for Gen Z&apos;s favorite party planning site </p>
      <div className="l-column gap-24 max-w-[80vw] sm:p-36">
        <div className="self-center">
          <LabeledImage
            src={partiful}
            className="shadow rounded-lg"
            alt="Old Partiful event customization page"
            label="Partiful's existing event customization page"
            width={800}
          />
        </div>

        <section className="l-column gap-14">
          <h2 className="text-20"> Overview </h2>
          <p className="text-14">
            Partiful is one of the most popular event planning platforms targeted towards
            the Gen Z and Millennial demographic. Compared to competitors like Eventbrite
            and Facebook, Partiful is highly customizable, enabling users to truly capture
            the vibe of their party or event and delight their guests.
          </p>

          <p className="text-14">
            As part of a team with 3 other members, we designed new features for Partiful’s
            event customization page, the page where users can customize the text, layout, and
            design of the invite sent out to their guests – in particular, I worked on
            features allowing users to customize the song and background theme of the page.
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Problem </h2>
          <p className="text-14">
            As wonderful and widely-used Partiful currently is among the younger generation,
            some of Partiful’s users, especially more tech-savvy ones, can often be “underwhelmed”
            by the lack of customization options to tailor their party invitation to their liking.
          </p>

          <p className="text-14">
            For instance, users cannot upload their own background image as a “theme”; instead,
            they can only select from a set of preselected options provided by Partiful. However,
            providing users total flexibility in choosing their theme could lead to poor contrast
            and readability issues, in turn reflecting poorly on Partiful as a product.
          </p>

          <p className="text-14">
            Overall, our problem essentially boils down to this: how do we balance the creative
            freedom provided to users while maintaining sensible stylistic defaults and guardrails?
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Adding Music </h2>
          <div className="text-14">
            When coming up with a design enabling users to add songs to their invites,
            I had 2 main considerations:
            <ol className="pl-24 list-decimal">
              <li>
                A minimal, intuitive interface to search for, select, and trim a song.
              </li>
              <li>
                A straightforward way to preview selected songs and change them if desired.
              </li>
            </ol>
          </div>
          <p className="text-14"> After sketching for the first time, most of the team agreed on the actual flow of the modal itself, but disagreed on the placement of the “Add Song” button. </p>

          <div className="row self-center gap-24 p-12 overflow-x-auto">
            <LabeledImage
              src={songsketch1}
              className="rounded-lg"
              alt="Song sketch 1"
              label="One sketch for the song feature"
              height={400}
            />
            <LabeledImage
              src={songsketch2}
              className="rounded-lg"
              alt="Song sketch 2"
              label="Another set of sketches for the song feature"
              height={400}
            />
          </div>

          <p className="text-14">
            In the end, we decided to go with adding music on top of the title,
            instead of on the side toolbar, as we believed that from the invitee’s
            perspective, the option to play and pause the music would be more
            intuitive to find when located above the title.
          </p>
          <p className="text-14">
            Aside from that, this initial design was received relatively well by teammates
            and Partiful staff. Thus, iterating towards a final design was straightforward:
          </p>

          <div className="row self-center gap-24 p-12 overflow-x-auto">
            <LabeledImage
              src={songlofi}
              className="self-center rounded-lg"
              alt="Song lofi"
              label="Low-fidelity prototype of the new song feature"
              height={600}
            />
            <LabeledImage
              src={songhifi}
              className="self-center rounded-lg"
              alt="Song hifi"
              label="High-fidelity prototype of the new song feature"
              height={600}
            />
          </div>

          <p className="text-14">
            With this setup, we successfully achieved the main two considerations I had from
            the start – an understandable UI to search and choose relevant parts of a song as
            well as easily swap out the music if desired.
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Customizing Theme </h2>
          <p className="text-14">
            Inventing a new way to customize themes was more challenging, however.
            At first, I leaned towards providing users more flexibility, trusting that
            those seeking for more customization options would have well-defined
            reasons for doing so.
          </p>
          <p className="text-14">
            Initially, with this in mind, I designed a modal with two options for user theme
            customization: custom color or gradient backgrounds, and AI generated themes.
          </p>

          <div className="self-center m-12">
            <LabeledImage src={themesketch} alt="Theme sketch" className="shadow rounded-lg self-center" label="Sketches for gradient and AI theme customization" width={550} />
          </div>

          <p className="text-14"> Unfortunately, my ideas this time around garnered less approval – other teammates and a few Partiful members leaned in the opposite direction, preferring to limit user flexibility. </p>

          <p className="text-14">
            After testing a few other possibilities and debating between them, we decided to scrap
            the entirety of the AI and gradient theme genrators. With the help of my team, we
            came up with a simpler, yet still highly customizable interface:
          </p>

          <div className="self-center m-12">
            <LabeledImage src={themehifi} alt="Theme hifi" className="shadow rounded-lg self-center" label="High-fidelity prototype of new hue slides" width={700} />
          </div>

          <p className="text-14">
            By only providing a hue slider, users aren’t able to use background images that weren’t
            previously approved by Partiful that could clutter the page and appear clunky. However,
            users would still have the freedom to adjust the color of the theme to choose a pattern
            and color that best suits their invite! To maintain appropriate color contrast, the font
            color could auto adjust between white or black for maximum readability.
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Reflections </h2>
          <p className="text-14">
            Overall, I loved working on this project with my team and
            with Partiful. I gained valuable experience in iterating over
            various designs while receiving feedback from various stakeholders,
            especially in a professional setting. In fact, the past couple of weeks has
            inspired me to seek out new opportunities to work with other startups going forward,
            as I’ve realized how much I enjoy the more fast-paced environment
            conducive to innovation.
          </p>
        </section>
      </div>
    </main>
  );
}