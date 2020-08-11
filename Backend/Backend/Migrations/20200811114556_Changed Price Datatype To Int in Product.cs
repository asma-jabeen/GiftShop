using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class ChangedPriceDatatypeToIntinProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Price",
                table: "Products",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(16)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Price",
                table: "Products",
                type: "varchar(16)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
