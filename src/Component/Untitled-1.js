// async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);

    //     parsedData.status === 'ok' && this.setState({
    //         article: parsedData.articles,
    //         total: parsedData.totalResults,
    //         status: "ok",
    //         loading: false
    //     });
    //     document.title = this.capitalize(this.props.category) + " News-Monkey";
    // }
    // previousHandler = () => {
    //     this.setState(() => ({ page: this.state.page - 1 }), () => {
    //         this.updateNews();
    //     });
    // }
    // nextHandler = () => {
    //     this.setState(() => ({ page: this.state.page + 1 }), () => {
    //         this.updateNews();
    //     });
    // }