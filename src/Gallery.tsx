//import { PageEntity } from "@logseq/libs/dist/LSPlugin";
import { BlockEntity } from "@logseq/libs/dist/LSPlugin";
import React from "react";

// this function should be fine for now, might handle all the nasty path parsing for us
function processCoverURL(rawCoverURL: string): string {
  rawCoverURL = String(rawCoverURL).trim();
  
  const markdownImageRegex = /!\[.*\]\((.*)\)/;
  const matches = rawCoverURL.match(markdownImageRegex);
  if (matches && matches.length > 1) {
      return matches[1];
    }
  return rawCoverURL;
}

// just changed page to block
/* interface NoteProps {
  page: PageEntity
  graphPath:string
} */
interface NoteProps {
  block: BlockEntity
  graphPath:string
}

// page to block again
// const Note = ({page,graphPath}:NoteProps) => {
const Note = ({block,graphPath}:NoteProps) => {

  // so this checks for the cover and banner properties (they can be used interchangeably)
  // instead, we want it to check for the LINK property, which is what Logseq uses by default for images
  // const rawCoverURL = page.properties?.cover || page.properties?.banner || ""
  const rawCoverURL = block.properties?.link || ""

  // replace markdown image path to assert path if it is 
  // to judge if it is a markdown image path like ![xxx](path)

  const propsBanner =  graphPath.startsWith("http") ? graphPath: encodeURI("assets://" + graphPath + processCoverURL(rawCoverURL).replace("..", ""))

// I've removed the <div> with page.name etc, not necessary for this

  // check is file exist

  return (
    <div className="w-48 whitespace-nowrap rounded-lg cursor-pointer overflow-hidden"
    // openPage comes from Main.tsx
      data-on-click="openPage"
      // uh oh we're gonna have to the modal that pops up when an image is clicked on
      //data-on-click-args={page.name}
    >
      <div className="flex flex-col align-middle justify-center overflow-hidden"
        style={{
          height: '6rem',
          backgroundColor: 'var(--ls-tertiary-background-color)'
        }}
      >
        {
          rawCoverURL && 
          <img 
            style={{
              objectFit: "cover",
              height: '6rem',
              width: '12rem',
            }}
            src={propsBanner} 
          />
        }
        {
          !rawCoverURL && 
            <div className="m-auto"
              style={{
                color: 'var(--ls-quaternary-text-color)',
              }}
            >No Cover</div>
        }
      </div>
      <div className="flex gap-1 w-48 align-middle"
        style={{
          height: '3rem',
          backgroundColor: 'var(--ls-quaternary-background-color)'
        }}
      >
      </div>
    </div>
  )
}

/* interface GalleryProps {
  pages: PageEntity[]
  graphPath:string
  title: string
} */

interface GalleryProps {
  blocks: BlockEntity[]
  graphPath:string
  title: string
}

//function Gallery({pages,graphPath,title}:GalleryProps) {
function Gallery({blocks,graphPath,title}:GalleryProps) {
  //console.log(pages)
  console.log(blocks)

  return (
    <main>
      <h3>{title}</h3>
      <div className="flex gap-4 flex-wrap">
        {
          /* pages.map((page) => 
            <Note 
              key={page.id}
              page={page}
              graphPath={graphPath}
            />) */
            blocks.map((block) => 
            <Note 
              key={block.id}
              block={block}
              graphPath={graphPath}
            />)
        }
        {/* click here in to edit */}
        {
          blocks.length === 0 && <div>There is nothing</div>
        }
      </div>
    </main>
  );
  
}

export default Gallery;
