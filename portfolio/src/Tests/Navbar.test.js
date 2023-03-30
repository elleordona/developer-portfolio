// Navbar Component Testing

// imports
import { render, screen } from '@testing-library/react';
import AppNavbar from '../Components/Navbar';

describe('Navbar Component Testing', () => {
	test('should render my name', () => {
		// Arrange
		// Act
		render(<AppNavbar />);
		// Assert
		expect(screen.getByRole('link', { name: /elle ordoña/i })).toBeInTheDocument();
	});
});
