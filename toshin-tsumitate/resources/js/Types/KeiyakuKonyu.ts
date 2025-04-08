/**
 * 目論見書閲覧状況で使用する
 * 契約銘柄を追加する前の画面で使用
 */
export interface KeiyakuKonyu{
    id: number,
    MeigaraName: string,
    MeigaraCode: string,
    HasMokuromishoConfirmed: boolean,
}