
// Utility function to get consistent colors for tags
export const getTagColor = (tag: string): string => {
  const tagColors: Record<string, string> = {
    'Product Strategy': 'bg-blue-100 text-blue-800 border-blue-200',
    'UX Design': 'bg-purple-100 text-purple-800 border-purple-200',
    'Agile': 'bg-green-100 text-green-800 border-green-200',
    'User Research': 'bg-orange-100 text-orange-800 border-orange-200',
    'A/B Testing': 'bg-pink-100 text-pink-800 border-pink-200',
    'Analytics': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Accessibility': 'bg-teal-100 text-teal-800 border-teal-200',
    'User Testing': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'HIPAA Compliance': 'bg-red-100 text-red-800 border-red-200',
    'Data Analysis': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Visualization': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Real-time': 'bg-violet-100 text-violet-800 border-violet-200',
    'Productivity': 'bg-lime-100 text-lime-800 border-lime-200',
    'Team Collaboration': 'bg-rose-100 text-rose-800 border-rose-200',
    'Mobile First': 'bg-amber-100 text-amber-800 border-amber-200',
    'EdTech': 'bg-sky-100 text-sky-800 border-sky-200',
    'Personalization': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    'User Journey': 'bg-slate-100 text-slate-800 border-slate-200',
    'AI': 'bg-blue-100 text-blue-800 border-blue-200',
    'Sleep Research': 'bg-purple-100 text-purple-800 border-purple-200',
    'Social Impact': 'bg-green-100 text-green-800 border-green-200',
    'Safety': 'bg-red-100 text-red-800 border-red-200',
  };

  return tagColors[tag] || 'bg-gray-100 text-gray-800 border-gray-200';
};
