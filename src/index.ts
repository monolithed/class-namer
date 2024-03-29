export default function (object: {[key: string]: unknown}) {
    const result = [];

    for (const [name, value] of Object.entries(object)) {
        if (value) {
            result.push(name);
        }
    }

    return result.join(' ');
}
