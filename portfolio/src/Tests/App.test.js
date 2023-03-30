// App Component Testing

// imports
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component Testing', () => {
	//* Test that App renders the Navbar
	test('should render the Navbar', () => {
		// Arrange
		// Act
		render(<App />);
		// Assert
		const name = screen.getByRole('link', { name: /elle ordoña/i });
		expect(name).toBeInTheDocument();
	});
});
