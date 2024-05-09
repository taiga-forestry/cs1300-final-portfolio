import Image from "next/image";
import SideLine from "@/app/(components)/line/SideLine";
import Separator from "@/app/(components)/line/Separator";
import grapes from "../../../../public/grapes/grapes.png";
import nodes from "../../../../public/grapes/nodes.png";
import wysiwyg from "../../../../public/grapes/wysiwyg.png";
import assets from "../../../../public/grapes/assets.png";

export default function Grapes() {
  return (
    <main className="xs:px-48 lg:px-[120px] py-24 c-column">
      <SideLine text="Figma Grapes Editor" />
      <p className="text-14 self-start xs:mb-36 sm:mb-0"> Streamlining marketing campaigns via Figma-to-Braze Integrations </p>
      <div className="l-column gap-24 max-w-[80vw] sm:p-36">
        <Image src={grapes} className="rounded-lg self-center" alt="Old Partiful Home Page" width={800} />
        <section className="l-column gap-14">
          <h2 className="text-20"> Overview </h2>
          <p className="text-14">
            Braze is a comprehensive customer engagement platform used by businesses for
            multichannel marketing. For instance, companies such as Pizza Hut or HBO Max
            use Braze to create marketing campaigns, strategically sending various push
            notifications and promotions to their customers to maximize their sales revenue.
          </p>

          <p className="text-14">
            As an intern on the In-App Messaging team, I was in charge of creating a plugin
            that would allow designers to create and export their designs from Figma directly
            into Braze’s existing drag-and-drop editor. From there, the in-app message can
            either be edited further or configured with analytics and shipped out to customers.
          </p>

          <p className="text-14">
            Over the course of 10 weeks, I worked closely with senior software engineer
            <a href="https://www.linkedin.com/in/zach-sadler-37424082/" target="_blank" className="hover-lighten text-aqua"> Zach Sadler </a>
            and engineering manager
            <a href="https://www.linkedin.com/in/jesse-ridgway-138b3182/" target="_blank" className="hover-lighten text-aqua"> Jesse Ridgway </a>
            to design both the algorithm
            and protocol for the plugin as well as implement various front-end components
            that Braze customers would eventually use.
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Problem </h2>
          <div className="text-14">
            While the idea of directly importing designs from Figma into Braze’s
            drag-and-drop editor sounds convenient, the technical implementation
            behind it was far from simple. Namely,
            <ol className="pl-24 list-decimal">
              <li>
                Converting a design from Figma’s rich environment to Braze’s
                comparatively more limited
                <a href="https://grapesjs.com/" target="_blank" className="hover-lighten text-aqua"> GrapesJS </a>
                environment (the tool used to implement the existing Braze drag-and-drop editor)
                is tricky due to edge cases in handling the limitations in
                expressivity between the two systems.
              </li>
              <li>
                Handling asset exports required some workarounds on both on a technical
                level as well as a legal one (e.g. in dealing with copyright limitations)
              </li>
            </ol>
          </div>

          <p className="text-14">
            Overall, our problem essentially boils down to this: how do we provide the right
            amount of creative freedom to designers to create their best work for their brand
            while minimizing friction when importing into Braze’s system?
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Turning Fig(ma) into Grapes </h2>
          <p className="text-14">
            The main way to interact with a Figma document was by accessing its internal tree
            structure – similarly to HTML, each element was its own Node, and depending on
            the kind of element it was (e.g. Image vs. Frame), they would have their own
            respective properties. Similarly, GrapesJS also has a hierarchical tree
            structure; although the syntax was different from Figma’s, the high-level
            idea of representing designs through trees was the same.
          </p>

          <Image src={nodes} className="rounded self-center m-12" alt="Diagram of Figma nodes" width={600} />

          <div className="row self-center gap-24">
            {/* <Image src={songsketch1} alt="Song sketch 1" className="w-[700px] h-[500px]shadow rounded-lg" /> */}
            {/* <Image src={songsketch2} alt="Song sketch 2" className="w-[700px] h-[500px]shadow rounded-lg" /> */}
          </div>

          <p className="text-14">
            Thus, creating this translation layer between Figma’s Plugin API to GrapesJS
            was now a matter of learning which syntax represented the same item in both systems.
            For instance, if I wanted a design that was simply a red rectangle, Figma
            would represent it as a RectangleNode with a Fills object with a single layer with
            the color red. To convert this into a file ingestible by Braze’s editor, I would
            have to parse the RectangleNode and Fills object to create the corresponding
            rectangle and background-color in the correct GrapesJS syntax.
          </p>
          <p className="text-14">
            To flesh out the plugin from here, I first created primitives to correctly handle
            the translation of these independent design components and their properties, such as
            Rectangles. Then, I developed a recursive algorithm to systematically parse the entire
            Figma tree, reconstructing each Node as a GrapesJS block at each step.
          </p>

          <div className="row self-center gap-24">
            {/* <Image src={songlofi} alt="Song lo-fi" className="self-center w-[400px] h-[550px]shadow rounded-lg" /> */}
            {/* <Image src={songhifi} alt="Song hi-fi" className="self-center w-[350px] h-[550px]shadow rounded-lg" /> */}
          </div>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> A Few Sour Grapes (Edge Cases) </h2>
          <p className="text-14">
            Unfortunately, there wasn’t always a straightforward way to translate
            certain properties from Figma into GrapesJS, as GrapesJS did not necessarily
            support everything that Figma allowed designers to do.
          </p>

          <p className="text-14">
            For instance, consider the case where a designer wants to have a partially rounded image
            where the border radius on the left side is 10px wide, but the border on the right side
            has a width of 5px. In Figma, this is fully supported – however, in GrapesJS, an image
            can only have a uniform border radius.
          </p>

          <Image src={wysiwyg} className="rounded self-center m-12" alt="Screenshot of Braze drag-and-drop editor" width={650} />

          <p className="text-14">
            The biggest challenge to handle these wasn’t just technical, but also design-related –
            in essence, how should we design the plugin to notify designers that their Figma
            wireframes were incompatible? If we were too strict and heavily restricted what we
            allowed designers to create, they would be disincentivized from using Figma
            (and the plugin). However, if we were too lenient and attempted to translate properties
            that GrapesJS might not support, then designers might also be frustrated that once
            loaded into Braze’s editor, the final result might not resemble their work in Figma.
          </p>

          {/* <Image src={themehifi} alt="Theme hifi" className="w-[700px] h-[500px]shadow rounded-lg self-center" /> */}

          <div className="text-14">
            In the end, I decided to categorize most issues as either minor or major depending
            on how critically the unsupported feature would impact the final design.
            <ul className="list-disc pl-24">
              <li>
                For minor issues, the plugin would emit warnings when attempting to export
                to let the designer know that a certain property was not supported and a sensible
                default had been chosen. In the case of the aforementioned unbalanced border radius,
                the smallest border radius was chosen, and the plugin would make that choice clear
                to the designer.
              </li>
              <li>
                For major issues, however, exporting would simply fail and emit an error message
                indicating the reason for failure. In practice, the plugin would come with
                documentation of supported features and a Figma component library from Braze so
                designers would rarely ever end up using something major that was unsupported,
                but as a last resort fallback, the plugin export failing would inform designers
                of their mistake before being able to load it into Braze’s editor and causing
                unnecessary confusion.
              </li>
            </ul>
          </div>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Handling Assets </h2>
          <p className="text-14">
            Lastly, the two main assets that Braze’s editor supported (at the time) were
            custom images and fonts. While images could be directly exported through Figma,
            fonts could not be. Thus, the last main design challenge to tackle was creating
            a reasonable workflow to handle cases where designers attempted to export designs
            with fonts not immediately unavailable in Braze’s editor.
          </p>

          <p className="text-14">
            My first idea was to immediately load all fonts marked in the exported Figma file
            through Google Fonts, which has a lightweight API that allows loading fonts simply
            by adding 2 lines to the HTML of the page. However, when presenting my idea to the
            designers and engineers on my team, they were skeptical: first, they were unsure
            whether or not this would violate any terms of use or even legal guidelines, and
            secondly, they preferred to load fonts from Braze’s asset library from which each
            client would have the ability to add, remove, and modify fonts for their company
            as they please.
          </p>

          <Image src={assets} className="rounded self-center m-12" alt="Screenshot of Braze drag-and-drop editor" width={650} />

          <p className="text-14">
            To handle the integration with the media library, I implemented an extra deserialization
            layer after a design is imported into Braze’s editor. When parsing the GrapesJS to
            construct the final tree, the fonts are left untouched: then, for each unique font
            found in the tree, a similarity search would be conducted across all fonts in the media
            library. If a match (or near-match) is found, then the user is prompted via a modal
            to confirm the font to be loaded into the editor. Otherwise, if no match is found, the
            user is notified that no matching font was found, and links to fonts with similar names
            are provided instead.
          </p>
        </section>
        <Separator />

        <section className="l-column gap-16">
          <h2 className="text-20"> Reflections </h2>
          <p className="text-14">
            Over the 10 weeks I spent as a software engineer intern at Braze, I learned
            invaluable lessons regarding working in the tech industry. Having to work in
            sprints within a much more structured environment with senior engineers,
            product managers, and designers forced me to adopt a different working style,
            but in doing so I became more efficient as a developer and more adept at navigating
            large codebases. I also gained experience in working under an entirely new set of
            constraints I haven’t seen before – for instance, in school projects, I never had
            to consider legal issues such as copyright for the most part, but when working on
            a product that might have millions of users and generate substantial revenue, the
            stakes are much higher.
          </p>
          <p className="text-14">
            Overall, I loved my time at Braze, and I’m excited to return to Braze for the summer
            of 2024 to tackle new and interesting data engineering challenges on the Currents team!
          </p>
        </section>
      </div>
    </main>
  );
}