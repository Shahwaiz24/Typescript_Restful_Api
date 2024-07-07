var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserModel = /** @class */ (function () {
    function UserModel(username, number, email) {
        this.email = email;
        this.number = number;
        this.username = username;
    }
    Object.defineProperty(UserModel.prototype, "getCreatorUid", {
        get: function () {
            return this.creatorUid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "setCreatorUid", {
        set: function (UserUid) {
            this.creatorUid = UserUid;
        },
        enumerable: false,
        configurable: true
    });
    return UserModel;
}());
var data = new UserModel('Shahwaiz@dev', 923112393716, 'Shahwaiz@gmail.com');
data.setCreatorUid = '190323';
console.log(data.getCreatorUid);
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(username, number, email, accountType) {
        var _this = _super.call(this, username, number, email) || this;
        _this.email = email;
        _this.number = number;
        _this.accountType = accountType;
        _this.username = username;
        return _this;
    }
    AdminUser.prototype.createAdminUser = function () {
        console.log("Username : ".concat(this.username, " \n Email : ").concat(this.email, " \n Number : ").concat(this.number, " \n Account Type : ").concat(this.accountType, " \n User Uid : ").concat(this.getCreatorUid));
    };
    return AdminUser;
}(UserModel));
var UserType = new AdminUser('Huzaifa@dev', 9211923, 'Huzaifa@gmail.com', 'Admin');
UserType.setCreatorUid = '0987212';
UserType.createAdminUser();
