import { PageEntity } from "@logseq/libs/dist/LSPlugin";
import React from "react";

interface NoteProps {
  page: PageEntity
  graphPath:string
}
const Note = ({page,graphPath}:NoteProps) => {
  const propsBanner = "assets://" + graphPath + page.properties?.cover.replace("..", "")

  return (
    <div className="w-48 whitespace-nowrap rounded-lg cursor-pointer overflow-hidden"
      data-on-click="openPage"
      data-on-click-args={page.name}
    >
      <div className="flex flex-col align-middle justify-center overflow-hidden bg-black"
        style={{
          height: '6rem',
        }}
      >
        <img 
          style={{objectFit: "fill"}}
          alt={page.name}
          src={propsBanner} />
        </div>
      <div className="flex w-48 align-middle"
        style={{
          height: '6rem',
          backgroundColor: 'var(--ls-quaternary-background-color)'
        }}
      >
        <div className="mx-auto m-1 page-ref">{page.name}</div>
      </div>
    </div>
  )
}

interface AppProps {
  pages: PageEntity[]
  graphPath:string
  title: stirng
}
function App({pages,graphPath,title}:AppProps) {
  return (
    <main>
      <h3>{title}</h3>
      <div className="flex gap-4 flex-wrap">
        {
          pages.map((page) => 
            <Note 
              key={page.id}
              page={page}
              graphPath={graphPath}
            />)
        }
      </div>
    </main>
  );
  
}

export default App;
