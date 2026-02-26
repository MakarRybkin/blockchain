/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        // TODO Insert word symbol by symbol
        let node = this.root;
        for(let i=0; i<word.length; i++){
            const symbol = word[i];
            if(!node.children[symbol]){
                node.children[symbol] = new TrieNode(symbol);
            }
            node = node.children[symbol];
            if(i== word.length -1){
                node.isWord = true;
            } 
        }
    }

    hasNode(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const symbol = word[i];
            if (!node.children[symbol]) {
                return false;
            }
            node = node.children[symbol];
        }
        return node.isWord === true;
    }

    // return all words stored in trie
    getAllNodes() {
        const result = [];

        function dfs(node, prefix) {
            if (node.isWord) {
                result.push(prefix);
            }
            for (const childKey in node.children) {
                dfs(node.children[childKey], prefix + childKey);
            }
        }

        dfs(this.root, "");
        return result;
    }
}

module.exports = { Trie };
