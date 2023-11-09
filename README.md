# FasterJS

FasterJS is a framework designed to streamline API development by automatically generating CRUD APIs based on provided models.

## Installation

To install FasterJS, use npm:

```bash
npm install
```

### Configuration

1. Create an environment file by copying the example:

    ```bash
    cp .env.example .env
    ```

2. Create an environment file by copying the example:

    ```bash
    cp ./src/configs/config.example.ts ./src/configs/local.ts
    ```

### Usage

FasterJS simplifies API development by generating CRUD APIs from your models. Follow these steps to get started:

1. Define your modules in the <b>./src/modules</b> directory.

2. Run the following command to generate docs APIs:

    ```bash
    npm run docs
    ```

3. Start the dev:

    ```bash
    npm run dev
    ```

Your APIs will be available based on the defined modules.

## Project Structure

```lua
/
  |- src/
  |   |- configs/
  |   |   |- config.example.ts
  |   |   |- local.ts
  |   |- modules/
  |   |   |- users
  |   |   |   |- dtos
  |   |   |   |   |- user.request.dto.ts
  |   |   |   |   |- user.response.dto.ts
  |   |   |   |- user.controller.ts
  |   |   |   |- user.model.ts
  |   |   |- index.ts
  |   |- ...
  |- .env
  |- ...
```

## Contribution

If you would like to contribute to FasterJS, please open an issue or submit a pull request.

## Author

- Name: Quy NT
- Email: quy.nt.it.51vn@gmail.com