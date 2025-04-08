export function formatNumberWithCommas(number) {
    // 数値を文字列に変換
    const numStr = number.toString();
    
    // 4桁未満の場合はそのまま返す
    if (numStr.length < 4) {
      return numStr;
    }
    
    // 3桁区切りでカンマを挿入
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  