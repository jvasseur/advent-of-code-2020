import { assertEquals } from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import Image from './Image.ts';
import { BaseTile } from './Tile.ts';
import isMonster from './isMonster.ts';

Deno.test('get', () => {
    let image = new Image();

    image = image.withTile(0, 0, new BaseTile(0, [
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '#', '.', '.', '.', '.', '#', '#', '.', '.'],
        ['.', '.', '#', '.', '.', '#', '.', '.', '#', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '#', '.', '.', '.', '.', '#'],
    ]));

    image = image.withTile(1, 0, new BaseTile(1, [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '#', '#', '.', '.', '.', '.'],
        ['.', '.', '.', '#', '.', '.', '#', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ]));

    image = image.withTile(2, 0, new BaseTile(2, [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '#', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '#', '#', '#', '#', '.', '.', '.', '.'],
        ['.', '#', '.', '#', '.', '.', '#', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ]));

    assertEquals(isMonster(image, 0, 5), true);

    assertEquals(isMonster(image, 0, 3), false);
});
