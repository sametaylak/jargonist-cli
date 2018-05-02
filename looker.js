const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Spinner = require('cli-spinner').Spinner;

const BASE_URL = 'https://jargon.ist';
const spinner = new Spinner('%s Looking..');
spinner.setSpinnerString(6);

const fetchHtml = async (jargon) => {
  const response = await fetch(`${BASE_URL}/${jargon}`);
  const html = await response.text();
  return { 
    html: html,
    status: response.status
  };
}

const parseJargonHtml = (html) => {
  const $ = cheerio.load(html);
  const codeBlock = $('main > section div.gatsby-highlight').text();

  $('main > section div.gatsby-highlight').remove();

  const title = $('main > section h1.u-color-primary.u-clear-gap').text();
  const body = $('main > section div.u-pad-top-xsmall').text();
  return { title, body, codeBlock };
}

const parseListHtml = (html) => {
  const $ = cheerio.load(html);
  const body = $('main section.c-section.u-pad-bottom-large a').toArray().map((node) => $(node).text());
  return body;
}

const lookForJargon = async (jargon) => {
  spinner.start()
  const { html, status } = await fetchHtml(jargon);
  spinner.stop(true);  
  return {
    ...parseJargonHtml(html),
    status
  };
}

const listOfJargons = async () => {
  const { html } = await fetchHtml('dizin');
  return parseListHtml(html);
}

module.exports = {
  lookForJargon,
  listOfJargons
};