SELECT
    U.id AS user_id,
    U.first_name,
    U.last_name,
    U.email,
    U.user_gender,
    U.user_phone,
    U.user_address,
    U.user_role,
    C.category_name,
    W.image_url AS worker_image,
    T.id AS task_id,
    T.task_title,
    T.description AS task_description,
    T.budget,
    T.location AS task_location,
    I.image_url AS task_image
FROM
    User U
        LEFT JOIN
    Worker W ON U.id = W.user_id
        LEFT JOIN
    Task T ON W.id = T.worker_id
        LEFT JOIN
    Category C ON T.category_id = C.id
        LEFT JOIN
    TaskImage TI ON T.id = TI.task_id
        LEFT JOIN
    Image I ON TI.image_id = I.id
WHERE
    U.id = 32
ORDER BY
    T.id;