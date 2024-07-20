export const GENRES = ['Drama', 'Romance', 'Adventure', 'Science Fiction', 'Fantasy', 'Mystery', 'Horror']

export const THEMES = {
    human_nature: {
        focus: ['psychological', 'philosophical'],
        ratio: [3, 2],
        length: [200, 400]
    },
    love: {
        focus: ['romantic', 'platonic'],
        ratio: [2, 3],
        length: [150, 300]
    },
    heroism: {
        focus: ['adventure', 'sacrifice'],
        ratio: [2, 4],
        length: [250, 500]
    }
}

export const LITERATURE = {
    all_novels: ['Pride and Prejudice', 'Moby Dick', '1984', 'Hamlet', 'Frankenstein'],
    classic_authors: {
        shakespeare: ['Hamlet', 'Macbeth', 'Othello'],
        austen: ['Pride and Prejudice', 'Sense and Sensibility'],
        orwell: ['1984', 'Animal Farm'],
        shelley: ['Frankenstein']
    },
    modern_authors: {
        king: ['The Shining', 'It'],
        rowling: ['Harry Potter and the Philosopher\'s Stone', 'Harry Potter and the Chamber of Secrets'],
        tolkien: ['The Hobbit', 'The Lord of the Rings']
    }
}

// Write a function that flattens this thing with all the variants
// If academic, then have to specify the subject (e.g., Literature, History)
// Add instructions for substitutions (alternate readings) for novels that are hard to find
// Variant is just going to be genre (forget about sub-genres for now)
// Make it so that you can't get the same variant in a single reading list (maybe)
// Add all the other variants to the substitute list
// Pick a random book
// For non-classics, exclude all the academic-specific books

const alt_readings = {

}

export const NOVELS = {
    'Pride and Prejudice': {
        type: 'romance',
        meta: {
            environment: 'classic',
            level: [0, 1, 2],
            subject: ['Literature']
        },
        variants: {
            abridged: 'An abridged version, focusing on the main plot and characters.',
            annotated: 'Includes notes and explanations for historical and cultural context.',
            illustrated: 'A version with illustrations depicting key scenes.'
        },
        unit: 'pages', // vs chapters
        themes: ['love', 'social class'],
        description: 'A romantic novel that delves into the manners and matrimonial machinations among the British gentry of the early 19th century.',
        substitutes: ['Sense and Sensibility', 'Emma']
    },
    '1984': {
        type: 'dystopian',
        meta: {
            environment: 'classic',
            level: [0, 1, 2],
            subject: ['Literature', 'Political Science']
        },
        variants: {
            unabridged: 'The complete, unedited text.',
            critical_edition: 'Includes critical essays and analysis.',
            graphic_novel: 'A graphic novel adaptation of the original text.'
        },
        unit: 'pages', // vs chapters
        themes: ['totalitarianism', 'freedom'],
        description: 'A dystopian novel set in a totalitarian society under constant surveillance, exploring themes of government control and individual freedom.',
        substitutes: ['Brave New World', 'Fahrenheit 451']
    },
    'Moby Dick': {
        type: 'adventure',
        meta: {
            environment: 'classic',
            level: [0, 1, 2],
            subject: ['Literature', 'Maritime History']
        },
        variants: {
            unabridged: 'The complete, unedited text.',
            simplified: 'A simplified version for easier reading.',
            illustrated: 'A version with illustrations depicting key scenes.'
        },
        unit: 'pages', // vs chapters
        themes: ['obsession', 'revenge'],
        description: 'An epic tale of the voyage of the whaling ship Pequod, led by Captain Ahab in his obsessive quest to kill the white whale, Moby Dick.',
        substitutes: ['The Old Man and the Sea', 'Heart of the Sea']
    },
    'Hamlet': {
        type: 'drama',
        meta: {
            environment: 'classic',
            level: [0, 1, 2],
            subject: ['Literature', 'Theater']
        },
        variants: {
            folio: 'The First Folio edition.',
            quarto: 'The Second Quarto edition.',
            modern_text: 'A modern English translation.'
        },
        unit: 'acts', // vs scenes
        themes: ['revenge', 'madness'],
        description: 'A tragedy play that tells the story of Prince Hamlet of Denmark, who seeks revenge against his uncle, who has murdered his father.',
        substitutes: ['Macbeth', 'Othello']
    },
    'Frankenstein': {
        type: 'horror',
        meta: {
            environment: 'classic',
            level: [0, 1, 2],
            subject: ['Literature', 'Science Fiction']
        },
        variants: {
            original: 'The original 1818 text.',
            revised: 'The 1831 revised edition.',
            annotated: 'Includes notes and explanations for historical and cultural context.'
        },
        unit: 'pages', // vs chapters
        themes: ['creation', 'monstrosity'],
        description: 'A gothic novel that tells the story of Victor Frankenstein, a scientist who creates a sapient creature in an unorthodox scientific experiment.',
        substitutes: ['Dracula', 'The Strange Case of Dr. Jekyll and Mr. Hyde']
    }
}