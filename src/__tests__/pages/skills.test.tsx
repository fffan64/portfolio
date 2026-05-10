import { render, screen } from '@testing-library/react';

import Skills from '@/pages/skills';

describe('Skills Page', () => {
  it('renders the skills page', () => {
    render(<Skills />);

    // Check for the main heading (using getAllByText since there are multiple "Skills" elements)
    const skillsHeadings = screen.getAllByText('Skills');
    expect(skillsHeadings.length).toBeGreaterThan(0);

    // Check for the overview text
    expect(screen.getByText(/I'm a full-stack dev/i)).toBeInTheDocument();

    // Check for some skill categories
    expect(screen.getByText(/Programming Languages/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend/i)).toBeInTheDocument();

    // Check for some specific skills
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
