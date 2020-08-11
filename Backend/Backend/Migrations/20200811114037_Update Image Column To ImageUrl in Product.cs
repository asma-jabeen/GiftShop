using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class UpdateImageColumnToImageUrlinProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Products",
                newName: "ImageUrl");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Products",
                newName: "Image");
        }
    }
}
