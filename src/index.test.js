import sensitiveWords from '.';

test('replaces blacklisted words with asteriks', () =>(
	expect(sensitiveWords(
		'The name of the NX will be the Nintendo Switch',
		['switch']
	)).toBe('The name of the NX will be the Nintendo ***')
));

test('replaces blacklisted words with asteriks', () =>(
	expect(sensitiveWords(
		'The name of the NX will be the Nintendo Switch. The Switch will be awesome!',
		['switch']
	)).toBe('The name of the NX will be the Nintendo ***. The *** will be awesome!')
))