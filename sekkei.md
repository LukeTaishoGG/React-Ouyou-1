## 詳細設計
・typeScript React (vite)の環境構築
1. User.tsx
・で型定義とA PI取得
2. LayOut.tsx
・L共通の外枠を作成。<Outlet />でコンポーネントを差し込み
3. UserPage.tsx
・useUsers() でユーザー一覧を取得
・loading 中はローディング画像を表示
・error があればエラーメッセージ表示
・一覧をmapで出力し、名前から詳細ページへ遷移できるようにする
4. UserDetail.tsx
・useParams() で URL から userId を取得
・useUser(userId) で該当ユーザー情報を取得
・loading 中はローディング画像を表示
・error または user がない場合は「取得失敗」と表示
・成功時はname,email,phone,address,company を表示
・cssを作成
Layout　UserPage　UserDetail
5. MainRouter
・Layout　UserPage　UserDetailのファイルとcssを読み込み、ルーティングを設定。
/でUserPageを表示するように設定
・Index.htmlでMainRouter.tsxをアプリの起点として読み込む