export function shuffle(elements: any[]): any[] {
    return elements
        .map((value) => ({ value, randomize: Math.random() }))
        .sort((obj1, obj2) => obj1.randomize - obj2.randomize)
        .map((obj) => obj.value);
}
