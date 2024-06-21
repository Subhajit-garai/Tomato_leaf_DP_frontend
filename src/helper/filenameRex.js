

export const formatfilename = (filename) => {
    const str = filename
    // Remove numbers and symbols
    let symbols = /\b[a-zA-Z0-9]*[A-Z0-9a-z]*[a-z0-9A-Z]*[0-9a-zA-Z]*|_+\b/g;
    let symbols2 = /\b|-+|_+\b/g;
    let symbols3 = /\b_+|_+\b/g
    let withoutAlphanumeric = str.replace(symbols, '');
    let withoutSymbols = withoutAlphanumeric.replace(symbols2, '');
     withoutSymbols = withoutSymbols.replace(symbols3, match => match.length === 1 ? "" : " ");
    
     return withoutSymbols;
    }