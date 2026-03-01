namespace stu.db;
entity Students {
    key studentId : UUID;
        name      : String(50);
        address   : String;
        email     : String(50);
        city      : String;
        country   : String;
        class     : Integer;
}
