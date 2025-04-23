// JS (in form.js)
const input = document.querySelector('#subsidiaryInput');

if (input) {
  const allowedSubsidiaries = ['1', '2', '3', '4'];
  const initial = input.value.split('|').map(s => s.trim()).filter(s => allowedSubsidiaries.includes(s));

  const tagify = new Tagify(input, {
    whitelist: allowedSubsidiaries,
    maxTags: 4,
    enforceWhitelist: true,
    dropdown: {
      enabled: 0
    }
  });

  tagify.addTags(initial);
}
