window.onload = Matrix = () => {
  // canvas領域のサイズを画面サイズに設定する
  const screen = window.screen;
  const width = (q.width = screen.width);
  const height = (q.height = screen.height);

  // 文字を256文字の座標を1で初期化する
  let letters = Array(256).join(1).split("");

  const draw = () => {
    // canvasのコンテキストを取得する
    const ctx = q.getContext("2d");

    // 黒でcanvas領域を塗りつぶす(alpha 0.12)
    // 半透明の黒で塗りつぶすので、前回書き込まれた文字は薄暗くなるものの、1回の描画では真っ黒にならない
    // 塗りつぶしの色を設定
    ctx.fillStyle = "rgba(0, 0, 0, .09";
    // 矩形領域を塗りつぶす
    ctx.fillRect(0, 0, width, height);
    // 文字の描画色を設定する
    ctx.fillStyle = "#0F0";

    // 1文字ずつ描画処理を行う
    letters.map(
      (textRender = (y, index) => {
        // 0xfeff0021 - feff007e (半角の英数記号)の範囲の文字コードを取得する(UTF-16)
        let code = 0xfeff0021 + Math.random() * 93;
        // 指定文字コードの文字を取得する(UTF-16の文字コードを指定する)
        text = String.fromCharCode(code);
        x = index * 10;
        // テキストをcanvas領域に描画する
        ctx.fillText(text, x, y);
        // 文字のy座標を下に移動する。yが700+ランダム値を超えたらyをリセットする。
        letters[index] = y > 700 + Math.random() * 10000 ? 0 : y + 10;
      })
    );
  };
  setInterval(draw, 30);
};
