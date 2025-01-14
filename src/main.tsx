import "@logseq/libs";
import { renderToString } from "react-dom/server";
import React from "react";
import "./index.css";

// import { logseq as PL } from "../package.json";
import Gallery from "./Gallery";
import { PageEntity,BlockEntity } from "@logseq/libs/dist/LSPlugin";

/* async function processPages(pages: (PageEntity | BlockEntity)[]):Promise<(PageEntity)[]> {
  const processedPages = await Promise.all(pages.map(async (page) => {
    if (page.originalName == undefined) {
      return (await logseq.Editor.getPage(page.page.id)) as PageEntity;
    }
    return page as PageEntity;
  }));
  return processedPages;
} */
async function processPages(blocks: (BlockEntity)[]):Promise<(BlockEntity)[]> {
  const processedPages = await Promise.all(blocks.map(async (block) => {
    /* if (page.originalName == undefined) {
      return (await logseq.Editor.getPage(page.page.id)) as PageEntity;
    } */
    return block as BlockEntity;
  }));
  return processedPages;
}

function main() {

  /* logseq.provideModel({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    openPage (e: any) {
      console.info(e)
      logseq.App.pushState('page',{name:e.dataset.onClickArgs})
    }
   }) */
   
  logseq.App.onMacroRendererSlotted(async ({ slot, payload}) => {
    const [type,query,title] = payload.arguments

    if (type !== ':gallery') return

    //const pages = await logseq.DB.q(query) as PageEntity[] | BlockEntity[]
    const pages = await logseq.DB.q(query) as BlockEntity[]

    console.log(await logseq.DB.q(query))
    const graphPath = (await logseq.App.getCurrentGraph())?.path || "";

    const processPage = (await processPages(pages))
    // reduce duplicated pages
    //const processPageSet = new Set(processPage.map((page) => page.id))
    const processPageSet = new Set(processPage.map((block) => block.id))
    //const processPageArray = Array.from(processPageSet).map((id) => processPage.find((page) => page.id === id)) as PageEntity[]
    const processPageArray = Array.from(processPageSet).map((id) => processPage.find((block) => block.id === id)) as BlockEntity[]

    const html = renderToString(<Gallery blocks={processPageArray} graphPath={graphPath} title={title}/>)
    logseq.provideUI({
       key: `gallery-${payload.uuid}-${slot}`,
       slot, 
       reset: true,
       template: html,
    })
  })
}

logseq.ready(main).catch(console.error);
