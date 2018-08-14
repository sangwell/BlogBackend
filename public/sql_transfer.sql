CREATE DEFINER=`root`@`localhost` PROCEDURE `blog_add`(
IN p_Id varchar(128),
IN p_Title varchar(50),
IN p_Content longtext,
IN p_Date varchar(20),
IN p_Tags varchar(100)
)
BEGIN

    if exists (select * from blog.blog where Id = p_Id)
    then
    begin
		UPDATE blog.blog
		SET Title = p_Title,
			Content = p_Content,
            Date = p_Date,
            Tags = p_Tags
		WHERE Id = p_Id;
    end;
    else
    begin
		insert into blog.blog values (p_Id,p_Title,p_Content,p_Date,p_Tags);
    end;
    end if;

END