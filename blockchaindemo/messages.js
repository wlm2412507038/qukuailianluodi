// 引入消息类型常量
const messageType = require("./messages-type.js");
// 解构取出各个类型编号
const {
  REQUEST_LATEST_BLOCK,
  RECEIVE_LATEST_BLOCK,
  REQUEST_LATEST_BLOCKCHAIN,
  RECEIVE_LATEST_BLOCKCHAIN,
  HANDSHAKE,
} = messageType;

class Messages {
  // 1. 生成【请求最新区块】消息
  static getLatestBlock() {
    return {
      type: REQUEST_LATEST_BLOCK,
    };
  }

  // 2. 生成【返回最新区块】消息，参数block就是区块数据
  static sendLatestBlock(block) {
    return {
      type: RECEIVE_LATEST_BLOCK,
      data: block,
    };
  }

  // 3. 生成【请求整条区块链】消息
  static getBlockchain() {
    return {
      type: REQUEST_LATEST_BLOCKCHAIN,
    };
  }

  // 4. 生成【返回整条区块链】消息，参数blockchain是完整链
  static sendBlockchain(blockchain) {
    return {
      type: RECEIVE_LATEST_BLOCKCHAIN,
      data: blockchain,
    };
  }

  // 5. 生成【握手消息】，把自己的端口传给对方节点
  static sendHandshake(port) {
    return {
      type: HANDSHAKE,
      data: {
        port,
      },
    };
  }
}

module.exports = Messages;
