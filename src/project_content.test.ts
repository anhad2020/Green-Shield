import test from 'node:test';
import assert from 'node:assert/strict';

test('Project content contains authentic Green Shield and Parivartan metadata', () => {
  const meta = {
    siteTitle: 'Green Shield: Nature-Inspired Active Packaging | Parivartan - CCT, CGC',
    projectTitle: 'Green Shield: Nature-Inspired Active Packaging',
    initiative: 'Parivartan',
    institution: 'Chandigarh College of Technology (CCT)',
    group: 'Chandigarh Group of Colleges (CGC)',
    department: 'Department of Biotechnology'
  };

  assert.ok(meta.siteTitle.includes('Green Shield'));
  assert.ok(meta.siteTitle.includes('Parivartan'));
  assert.ok(meta.institution.includes('Chandigarh College of Technology'));
});

test('Team and mentorship roster contains all specified members', () => {
  const teamLeaders = ['Japji Sandhu', 'Pallavi Rathour'];
  const teamMembers = ['Harmanjot Kaur', 'Krishika Sharma'];
  const mentor = 'Mr. Bhairav Prasad';

  assert.equal(teamLeaders.length, 2);
  assert.equal(teamMembers.length, 2);
  assert.ok(teamLeaders.includes('Japji Sandhu'));
  assert.ok(teamLeaders.includes('Pallavi Rathour'));
  assert.ok(teamMembers.includes('Harmanjot Kaur'));
  assert.ok(teamMembers.includes('Krishika Sharma'));
  assert.equal(mentor, 'Mr. Bhairav Prasad');
});

test('No forbidden emojis or em dashes in visible copy', () => {
  const sampleCopy = [
    'Green Shield: Nature-Inspired Active Packaging',
    'Biodegradable starch-gelatin and cellulose-gelatin film incorporated with natural plant extracts',
    'Parivartan - CCT, CGC',
    'Mr. Bhairav Prasad',
    'Japji Sandhu',
    'Pallavi Rathour',
    'Harmanjot Kaur',
    'Krishika Sharma'
  ];

  const emojiRegex = /[\u{1F300}-\u{1F9FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/u;
  for (const text of sampleCopy) {
    assert.equal(emojiRegex.test(text), false, `Text "${text}" must not contain emojis`);
    assert.equal(text.includes('—'), false, `Text "${text}" must not contain em dashes`);
  }
});
