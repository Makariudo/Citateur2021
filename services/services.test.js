const { hasUncaughtExceptionCaptureCallback } = require('process');
const APIDicoLink = require('./dicolinkApi');
const APIScrap = require('./scrappingDico');

describe('test find quote', () => {
  test('with word', async () => {
    const word = "amour";
    const res = await APIDicoLink.findCitation(word);
    expect(res).toHaveProperty('data');
    const {data} = res;
    expect(typeof(data)).toBe('object');
    expect(data[0]).toHaveProperty('citation');
  });
  
  test('without word', async () => {
    const res = await APIDicoLink.findCitation();
    expect(res).toHaveProperty('data');
    const {data} = res;
    expect(data[0].mot).toContain('amour');
  })

  test("get random quote", async () => {
    const res = await APIScrap.getCitation();
    expect(res).toBeTruthy();
    expect(typeof(res)).toBe('object');
    expect(res).toHaveProperty('citation');
    expect(res).toHaveProperty('auteur');
    expect(res).toHaveProperty('image');
    expect(res.citation.length).toBeGreaterThan(10);
  })
})