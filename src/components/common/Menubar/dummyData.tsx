import { MdKeyboardArrowRight } from 'react-icons/md';

export const dummyData = {
  File: [
    [
      {
        title: 'New Tab',
        suffix: '⌘ T',
      },
      {
        title: 'New Window',
        suffix: '⌘ N',
      },
      {
        title: 'New Incognito Window',
        disabled: true,
      },
    ],
    [
      {
        title: 'Share',
        suffix: <MdKeyboardArrowRight size={16} color="black" style={{ marginTop: '1.5px' }} />,
        children: ['Email link', 'Messages', 'Notes'],
      },
    ],
    [
      {
        title: 'Print',
        suffix: '⌘P',
      },
    ],
  ],
  Undo: [
    [
      {
        title: 'Undo',
        suffix: '⌘ Z',
      },
      {
        title: 'Redo',
        suffix: '⇧ ⌘ Z',
      },
    ],
    [
      {
        title: 'Find',
        children: ['Search the web', 'Find...', 'Find Next', 'Find Previos'],
      },
    ],
    [
      {
        title: 'Cut',
      },
      {
        title: 'Copy',
      },
      {
        title: 'Paste',
      },
    ],
  ],
  View: [
    [
      {
        title: 'Always Show Bookmarks Bar',
      },
      {
        title: 'Always Show Full URLs',
      },
    ],
    [
      {
        title: 'Reload',
        suffix: '⌘ R',
      },
      {
        title: 'Force Reload',
        suffix: '⇧ ⌘ R',
        disabled: true,
      },
    ],
    [
      {
        title: 'Toggle Fullscreen',
      },
    ],
    [
      {
        title: 'Hide Sidebar',
      },
    ],
  ],
  Profiles: [
    [
      {
        title: 'Edit...',
      },
    ],
  ],
};
