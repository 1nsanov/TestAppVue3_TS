import HeaderCustomModel from "./headerCustomModel";
import FooterCustomModel from "./footerCustomModel";
import ButtonAddCustomModel from "./buttonAddCustomModel";
import SidebarCustomModel from "./sidebarCustomModel";
import BreadcrumbsCustomModel from "./breadcrumbsCustomModel";
import ButtonHideCustomModel from "./buttonHideCustomModel";
import TableCustomModel from "./tableCustomModel";
import SubscriptionCustomModel from "./subscriptionCustomModel";

export default class CustomizationModel {
    private styleId = "ui-computed-styles";

    // Theme
    HoverButtonColor: string = "#13c4a1";
    BackgroundColorMainContainer: string = "#f8f8f9";
    TextPrimaryColorPage: string = "#080a3c";
    BlurFilter: string = "0px";
    Visibility: string = "visible";
    // Header
    HeaderCustom = new HeaderCustomModel();
    // Footer
    FooterCustom = new FooterCustomModel();
    // Button Add
    ButtonAdd = new ButtonAddCustomModel();
    // Button Hide
    ButtonHide = new ButtonHideCustomModel();
    // Sidebar
    SidebarCustom = new SidebarCustomModel();
    // Breadcrumbs
    BreadcrumbsCustom = new BreadcrumbsCustomModel();
    // Table
    TableCustom = new TableCustomModel();
    // Subscription
    SubscriptionCustom = new SubscriptionCustomModel();

    constructor(obj?: Partial<CustomizationModel>) {
        if (obj) {
            Object.assign(this, obj);
        }
    }

    initDark() {
        this.BackgroundColorMainContainer = "#343352";
        this.HeaderCustom.BackgroundColorHeader = "#414062";
        this.TextPrimaryColorPage = "#ffffff";
        this.HeaderCustom.PrimaryTextColorHeader = "#ffffff";
        this.HeaderCustom.BackgroundColorUserMenuHeader = "#414062";
        this.HeaderCustom.SecondaryTextColorHeader = "#ffffff";
        this.FooterCustom.BackgroundColorFooter = "#343352";
        this.FooterCustom.TextColorFooter = "#d7e5ef;";
        this.FooterCustom.BorderColorFooter = "#374653";
        this.ButtonAdd.ButtonAddBackgroundColor = "#343352";
        this.ButtonAdd.ButtonAddBorderColor = "#344975";
        this.ButtonHide.ButtonHideBackgroundColor = "#414062";
        this.ButtonHide.ButtonHideTextColor = "#2a8cff";
        this.SidebarCustom.TextPrimaryColorSidebarColumn = "#ffffff";
        this.SidebarCustom.BackgroundColorSidebarItem = "#414062";
        this.SidebarCustom.BackgroundColorSidebarItemHover = "#343352";
        this.SidebarCustom.BorderColorSidebarItemHover = "#3b395a";
        this.SidebarCustom.TextPrimaryColorSidebarItem = "#ffffff";
        // this.SidebarCustom.BackgroundColorSidebarStatisticUnreadCounter = "#aad5ff";
        // this.SidebarCustom.BackgroundColorSidebarStatisticArchivedCounter =
        // "#eef8ff";
        // this.SidebarCustom.TextColorSidebarStatisticUnreadCounter = "#080a3c";
        // this.SidebarCustom.TextColorSidebarStatisticArchivedCounter = "#4a6f8a";
        this.SidebarCustom.TextColorEmailSidebarItem = "#d7e5ef";
        this.BreadcrumbsCustom.FirstWordColorBreadcrumbs = "#d7e5ef";
        this.BreadcrumbsCustom.FirstWordColorBreadcrumbsReverse = "#2a8cff";
        this.BreadcrumbsCustom.OtherWordColorBreadcrumbs = "#2A8CFF";
        this.BreadcrumbsCustom.OtherWordColorBreadcrumbsReverse = "#d7e5ef";
        this.SidebarCustom.TextColorTitleCounterSidebarColumn = "#d7e5ef";
        this.TableCustom.TextColorHeaderTable = "#d7e5ef";
        this.TableCustom.BackgroundColorItemTable = "#414062";
        this.TableCustom.TextPrimaryColorItemTable = "#ffffff";
        this.TableCustom.TextSecondaryColorItemTable = "#d7e5ef";
        this.TableCustom.BorderButtonShowTable = "none";
        this.TableCustom.PaddingButtonShowHeader = "none";
        this.SubscriptionCustom.BackgroundColorPlan = "#414062";
        this.SubscriptionCustom.BackgroundColorCancelButton = "#414062";
    }

    initLight() {
        this.BackgroundColorMainContainer = "#f8f8f9";
        this.HeaderCustom.BackgroundColorHeader = "#ffffff";
        this.TextPrimaryColorPage = "#080a3c";
        this.HeaderCustom.PrimaryTextColorHeader = "#080a3c";
        this.HeaderCustom.BackgroundColorUserMenuHeader = "#ffffff";
        this.HeaderCustom.SecondaryTextColorHeader = "#4a6f8a";
        this.FooterCustom.BackgroundColorFooter = "#f8f8f9";
        this.FooterCustom.TextColorFooter = "#080A3C";
        this.FooterCustom.BorderColorFooter = "#e5e8ea";
        this.ButtonAdd.ButtonAddBackgroundColor = "#f8f8f9";
        this.ButtonAdd.ButtonAddBorderColor = "#e3edfa";
        this.ButtonHide.ButtonHideBackgroundColor = "#2a8cff";
        this.ButtonHide.ButtonHideTextColor = "#ffffff";
        this.SidebarCustom.TextPrimaryColorSidebarColumn = "#080A3C";
        this.SidebarCustom.BackgroundColorSidebarItem = "#ffffff";
        this.SidebarCustom.BackgroundColorSidebarItemHover = "#ffffff";
        this.SidebarCustom.BorderColorSidebarItemHover = "transparent";
        this.SidebarCustom.TextPrimaryColorSidebarItem = "#080A3C";
        // this.SidebarCustom.BackgroundColorSidebarStatisticUnreadCounter = "#080A3C";
        // this.SidebarCustom.BackgroundColorSidebarStatisticArchivedCounter =
        // "#4a6f8a";
        // this.SidebarCustom.TextColorSidebarStatisticUnreadCounter = "#ffffff";
        // this.SidebarCustom.TextColorSidebarStatisticArchivedCounter = "#ffffff;
        this.SidebarCustom.TextColorEmailSidebarItem = "#080A3C";
        this.BreadcrumbsCustom.FirstWordColorBreadcrumbs = "#080A3C";
        this.BreadcrumbsCustom.FirstWordColorBreadcrumbsReverse = "#2A8CFF";
        this.BreadcrumbsCustom.OtherWordColorBreadcrumbs = "#2A8CFF";
        this.BreadcrumbsCustom.OtherWordColorBreadcrumbsReverse = "#4a6f8a";
        this.SidebarCustom.TextColorTitleCounterSidebarColumn = "#4a6f8a";
        this.TableCustom.TextColorHeaderTable = "#4a6f8a";
        this.TableCustom.BackgroundColorItemTable = "#ffffff";
        this.TableCustom.TextPrimaryColorItemTable = "#080a3c";
        this.TableCustom.TextSecondaryColorItemTable = "#4A6F8A";
        this.TableCustom.BorderButtonShowTable = "1px solid #e3edfa";
        this.TableCustom.PaddingButtonShowHeader = "6px 21px";
        this.SubscriptionCustom.BackgroundColorPlan = "#ffffff";
        this.SubscriptionCustom.BackgroundColorCancelButton = "#ffffff";
    }

    initCustom(customization: CustomizationModel) {
        this.HeaderCustom.BackgroundColorHeader =
            customization.HeaderCustom.BackgroundColorHeader;
        this.BreadcrumbsCustom.FirstWordColorBreadcrumbs =
            customization.BreadcrumbsCustom.FirstWordColorBreadcrumbs;
        this.BreadcrumbsCustom.OtherWordColorBreadcrumbs =
            customization.BreadcrumbsCustom.OtherWordColorBreadcrumbs;
        this.BlurFilter = customization.BlurFilter;
        this.Visibility = customization.Visibility;
        this.HeaderCustom.OverflowHeader =
            customization.HeaderCustom.OverflowHeader;
    }

    getCurrentCustomization() {
        return this;
    }

    //Инициализация
    initCustomization() {
        const exist = document.getElementById(this.styleId) as HTMLScriptElement;
        exist.setAttribute("style", this.styleToString(this.setCustomization()));
    }

    // Устанавливаем цвета
    private setCustomization(): any {
        return {
            "--hover-button-color": this.HoverButtonColor,
            "--background-color-main-container": this.BackgroundColorMainContainer,
            "--text-primary-color-page": this.TextPrimaryColorPage,
            "--blur-filter": this.BlurFilter,
            "--visibility": this.Visibility,
            "--background-color-header": this.HeaderCustom.BackgroundColorHeader,
            "--background-color-user-menu-header":
            this.HeaderCustom.BackgroundColorUserMenuHeader,
            "--button-color-header": this.HeaderCustom.ButtonColorHeader,
            "--primary-text-color-header": this.HeaderCustom.PrimaryTextColorHeader,
            "--secondary-text-color-header":
            this.HeaderCustom.SecondaryTextColorHeader,
            "--overflow-header": this.HeaderCustom.OverflowHeader,
            "--background-color-footer": this.FooterCustom.BackgroundColorFooter,
            "--border-color-footer": this.FooterCustom.BorderColorFooter,
            "--text-color-footer": this.FooterCustom.TextColorFooter,
            "--text-color-menu-footer": this.FooterCustom.TextColorMenuFooter,
            "--button-add-background-color": this.ButtonAdd.ButtonAddBackgroundColor,
            "--button-add-border-color": this.ButtonAdd.ButtonAddBorderColor,
            "--button-hide-background-color":
            this.ButtonHide.ButtonHideBackgroundColor,
            "--button-hide-text-color": this.ButtonHide.ButtonHideTextColor,
            "--background-color-sidebar-item":
            this.SidebarCustom.BackgroundColorSidebarItem,
            "--background-color-sidebar-item-hover":
            this.SidebarCustom.BackgroundColorSidebarItemHover,
            "--border-color-sidebar-item-hover":
            this.SidebarCustom.BorderColorSidebarItemHover,
            "--text-primary-color-sidebar-item":
            this.SidebarCustom.TextPrimaryColorSidebarItem,
            "--text-color-email-sidebar-item":
            this.SidebarCustom.TextColorEmailSidebarItem,
            "--text-primary-color-sidebar-column":
            this.SidebarCustom.TextPrimaryColorSidebarColumn,
            "--text-secondary-color-sidebar-column":
            this.SidebarCustom.TextSecondaryColorSidebarColumn,
            "--button-background-color-sidebar-column":
            this.SidebarCustom.ButtonBackgroundColorSidebarColumn,
            "--text-color-item-counter-sidebar-column": this.SidebarCustom.TextColorItemCounterSidebarColumn,
            "--first-word-color-breadcrumbs":
            this.BreadcrumbsCustom.FirstWordColorBreadcrumbs,
            "--other-word-color-breadcrumbs":
            this.BreadcrumbsCustom.OtherWordColorBreadcrumbs,
            "--first-word-color-breadcrumbs-reverse":
            this.BreadcrumbsCustom.FirstWordColorBreadcrumbsReverse,
            "--other-word-color-breadcrumbs-reverse":
            this.BreadcrumbsCustom.OtherWordColorBreadcrumbsReverse,
            "--text-color-title-counter-sidebar-column":
            this.SidebarCustom.TextColorTitleCounterSidebarColumn,
            "--text-color-header-table": this.TableCustom.TextColorHeaderTable,
            "--text-primary-color-item-table":
            this.TableCustom.TextPrimaryColorItemTable,
            "--text-secondary-color-item-table":
            this.TableCustom.TextSecondaryColorItemTable,
            "--background-color-item-table":
            this.TableCustom.BackgroundColorItemTable,
            "--border-button-show-table": this.TableCustom.BorderButtonShowTable,
            "--padding-button-show-header": this.TableCustom.PaddingButtonShowHeader,
            "--background-color-plan": this.SubscriptionCustom.BackgroundColorPlan,
            "--border-color-cancel-button":
            this.SubscriptionCustom.BorderColorCancelButton,
            "--background-color-cancel-button":
            this.SubscriptionCustom.BackgroundColorCancelButton,
        };
    }

    private styleToString = (style: any) => {
        return Object.keys(style).reduce(
            (acc, key) =>
                acc +
                key
                    .split(/(?=[A-Z])/)
                    .join("-")
                    .toLowerCase() +
                ":" +
                style[key] +
                ";",
            ""
        );
    };

    private hexToRGBA = (hex: string, alpha: number) => {
        if (!this.isValidHex(hex)) {
            throw new Error("Invalid HEX");
        }
        var chunkSize = Math.floor((hex.length - 1) / 3);
        var hexArr = this.getChunksFromString(hex.slice(1), chunkSize);
        if (hexArr) {
            var [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
        }
        return `rgba(${r}, ${g}, ${b}, ${this.getAlphafloat(a, alpha)})`;
    };

    private isValidHex = (hex: string) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

    private getChunksFromString = (st: string, chunkSize: number) =>
        st.match(new RegExp(`.{${chunkSize}}`, "g"));

    private convertHexUnitTo256 = (hexStr: string) =>
        parseInt(hexStr.repeat(2 / hexStr.length), 16);

    private getAlphafloat = (a: number, alpha: number) => {
        if (typeof a !== "undefined") {
            return a / 255;
        }
        if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
            return 1;
        }
        return alpha;
    };

    rgbaValue(hex: string): any {
        if (!this.isValidHex(hex)) {
            throw new Error("Invalid HEX");
        }
        var chunkSize = Math.floor((hex.length - 1) / 3);
        var hexArr = this.getChunksFromString(hex.slice(1), chunkSize);
        if (hexArr) {
            var [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
        }
        return {
            r: r / 255,
            g: g / 255,
            b: b / 255,
            a: a,
        };
    }
}
