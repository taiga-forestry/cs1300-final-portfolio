import Image from "next/image";
import SideLine from "@/app/(components)/line/SideLine";
import wordhippo from "../../../../public/wordhippo/wordhippo.png";
import badarrowicon from "../../../../public/wordhippo/badarrowicon.png";
import goodarrowicon from "../../../../public/wordhippo/goodarrowicon.png";
import laptophifi from "../../../../public/wordhippo/laptophifi.png";
import phonehifi from "../../../../public/wordhippo/phonehifi.png";

export default function WordHippo() {
  return (
    <main className="px-48 py-24 c-column">
      <SideLine text="Word Hippo" />
      <p className="text-14 self-start">
        Redesigning the internet&apos;s favorite thesaurus for improved usability and accessibility
      </p>

      <div className="l-column gap-24 max-w-[80vw] p-36">
        <Image src={wordhippo} alt="" className="w-[700px] h-[525px] object-cover shadow rounded-lg self-center" />
        <div className="l-column gap-14">
          <h2 className="text-20"> Overview </h2>
          <p className="text-14">
            Word Hippo is a website commonly used by students and professionals alike for various
            writing tasks, particularly searching for synonyms. For instance, whenever I’m working
            on an essay, I often consult Word Hippo to find alternative words such as “effective”
            to avoid sounding repetitive.
          </p>

          <p className="text-14">
            In this project, I explore a potential redesign for Word Hippo’s website
            to be more usable, mobile-responsive, and accessible for those with disabilities.
          </p>
        </div>

        <div className="border-[0.5px] border-white w-36 m-12 h-[0.5px] self-center opacity-50" />

        <div className="l-column gap-16">
          <h2 className="text-20"> Problem </h2>
          <p className="text-14">
            The main issues with Word Hippo&apos;s existing site fall broadly into 2 categories:
          </p>

          <div className="grid grid-cols-2 gap-24 text-14">
            <div>
              Usability
              <ol className="pl-14">
                <li> 1. Arrow icons and other buttons are ambiguous and thus hard to use. </li>
                <li> 2. Shrinking the window (e.g. to split screen with Gmail) cuts off text. </li>
                <li> 3. The &quot;Contexts&quot; dropdown does not seem clickable. </li>
                <li> 4. Main search bar is too small, and other search bars clutter the site. </li>
              </ol>
            </div>

            <div>
              Accessibility
              <ol className="pl-14">
                <li>
                  1. Many form labels are missing, so using a screen reader is more challenging.
                </li>
                <li>
                  2. Lots of miscellaneous issues (e.g. extraneous tab indexes), which
                  complicate keyboard navigation.
                </li>
                <li> 3. Less importantly, but all Hippos lack alt texts! </li>
              </ol>
            </div>
          </div>

          <p className="text-14">
            Thus, in my initial sketching stages I emphasized designs that would fix these issues.
          </p>
        </div>

        <div className="border-[0.5px] border-white w-36 m-12 h-[0.5px] self-center opacity-50" />

        <div className="l-column gap-16">
          <h2 className="text-20"> Initial Designs </h2>
          <p className="text-14">
            To address many of the usability issues, I tried to identify the root cause of why
            some aspects of the interface were so unintuitive.
          </p>

          <p className="text-14">
            For instance, for the currently existing “up arrow” icon, I identified that:
            <ol className="pl-14">
              <li>
                1. Compared to other websites, an icon in that position would generally indicate
                a dropdown of some sort – it was rare to see websites that have a button simply
                to scroll to the top of a page fixed on each block of text.
              </li>
              <li>
                2. The small icon size, combined with a lack of hover effects and identical color
                to surrounding text, makes it difficult for users to realize that it was clickable.
              </li>
            </ol>
          </p>

          <Image src={badarrowicon} alt="" className="w-[650px] h-[300px] object-cover shadow rounded-lg self-center" />

          <p className="text-14">
            To fix this, I changed the functionality of the icon to open/collapse the synonyms for
            easier scrollability on long pages, and redesigned the icon to stand out more as
            clickable with a more standard shape and color.
          </p>

          <Image src={goodarrowicon} alt="" className="w-[650px] h-[200px] object-cover shadow rounded-lg self-center" />

          <p className="text-14">
            Similarly, the small size and lack of effects on the “Contexts” dropdown also
            prevents users from utilizing the feature easily.Thus, my redesign for Word Hippo,
            first and foremost, emphasized the discoverability of these icons.
          </p>

          <p className="text-14">
            Solutions for the accessibility and responsiveness issues were mostly
            straightforward and didn’t require much effort in redesigning: for the former,
            the implementation did not affect the UI itself (just the underlying code), and for
            the latter, simply allowing the text to resize freely and moving down modals or other
            dropdowns on smaller screen sizes solved most problems.
          </p>
        </div>

        <div className="border-[0.5px] border-white w-36 m-12 h-[0.5px] self-center opacity-50" />

        <div className="l-column gap-16">
          <h2 className="text-20"> Final Designs </h2>
          <p className="text-14">
            After finalizing the style guide (e.g. colors, typography, etc.),
            I settled on the final product:
          </p>

          <div className="row gap-24 self-center">
            <Image src={laptophifi} alt="" className="w-[675px] h-[550px] object-cover shadow rounded-lg self-center" />
            <Image src={phonehifi} alt="" className="w-[175px] h-[550px] object-cover shadow rounded-lg self-center" />
          </div>

          <p className="text-14">
            From the image above, it&apos;s clear that the largest usability and responsiveness
            issues have mostly been addressed. With more discoverable and intuitive icons,
            as well as a reasonable interface on smaller screen sizes, the
            new Word Hippo should provide an improved UX going forward.
          </p>
        </div>

        <div className="border-[0.5px] border-white w-36 m-12 h-[0.5px] self-center opacity-50" />

        <div className="l-column gap-16">
          <h2 className="text-20"> Reflections </h2>
          <p className="text-14">
            Redesigning a popular and commonly used website isn’t an easy choice to make,
            but sometimes looking at an existing UI with a critical lens to uncover usability
            and other accessibility issues is necessary to continually refine and improve its
            design. In the case of Word Hippo, applying good design principles led me to
            implement a few tweaks to hopefully improve the user experience for future
            users of the site.
          </p>
        </div>
      </div>
    </main>
  );
}