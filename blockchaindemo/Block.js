// 定义一个区块的类，定义我们区块链中的每个区块的数据结构
class Block {
  constructor(index, previousHash, timestamp, data, hash, nonce) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
  }

  static get genesis() {
    return new Block(
      0,
      "0",
      1582700000000,
      "first block",
      "000dc75a315c77a1f9c8fb6247835d18ac526327dca09928261d8189b37cf",
      604
    )
  }
}

module.exports = Block;

